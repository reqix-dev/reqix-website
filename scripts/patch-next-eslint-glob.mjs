import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const metadata = JSON.parse(await readFile(new URL("node_modules/@next/eslint-plugin-next/package.json", root), "utf8"));
assert.equal(metadata.version, "16.3.8", "Review the Next ESLint glob adapter before changing the plugin version.");
const globMetadata = JSON.parse(await readFile(new URL("node_modules/fast-glob/package.json", root), "utf8"));
assert.equal(globMetadata.name, "tinyglobby");
assert.equal(globMetadata.version, "0.2.17", "Review the rootDir adapter before changing tinyglobby.");

// GHSA-vfj7-8cjw-p6xm has no patched braces release. package.json limits the
// tinyglobby alias to this plugin's sole glob call, in getRootDirs. Preserve
// directory matching (not recursive expansion), absolute paths, and the
// descendant-only meaning of a final globstar after a static/brace root.
// Support simple directory globs and literal brace alternatives; reject complex
// syntax rather than silently change which directories a lint rule checks.
// Next's native rootDir array can express separate simple patterns instead.
// This is a rootDir adapter, not a replacement for the full fast-glob API.
// Remove this adapter and the alias once upstream no longer depends on vulnerable
// braces. Recheck tests/eslint-root-dirs.test.mjs on every dependency upgrade.
// https://superchupu.dev/tinyglobby/migration#switching-from-fast-glob
const target = new URL("node_modules/@next/eslint-plugin-next/dist/utils/get-root-dirs.js", root);
const source = await readFile(target, "utf8");
const original = String.raw`var processRootDir = function(rootDir) {
    return (0, _fastglob.globSync)(rootDir.replace(/\\/g, '/'), {
        onlyDirectories: true
    });
};`;
const adapted = String.raw`var processRootDir = function(rootDir) {
    var pattern = rootDir.replace(/\\/g, '/');
    var simplePattern = pattern.replace(/\{([^{}]+)\}/g, function(full, alternatives) {
        return alternatives.includes(',') && !/[*?\[\](){}]/.test(alternatives) ? 'literal' : full;
    });
    if (/[{}()]/.test(simplePattern) || (simplePattern.match(/(^|\/)\*\*(?=\/|$)/g) || []).length > 1) {
        throw new Error('This Next ESLint rootDir adapter supports simple directory globs and literal brace alternatives. Use a rootDir array of simple patterns instead of nested braces, extglobs, or multiple globstars.');
    }
    var prefix = simplePattern.replace(/(^|\/)\*\*\/?$/, '');
    var hasFinalGlobstar = /(^|\/)\*\*\/?$/.test(pattern);
    var normalized = !hasFinalGlobstar ? pattern : _fastglob.isDynamicPattern(prefix)
        ? [pattern, pattern.replace(/(^|\/)\*\*\/?$/, '')]
        : pattern.replace(/(^|\/)\*\*(\/?$)/, '$1**/*$2');
    return (0, _fastglob.globSync)(normalized, {
        onlyDirectories: true,
        expandDirectories: false,
        absolute: require('node:path').isAbsolute(pattern)
    }).map(function(dir) {
        return dir.length > 1 && dir.endsWith('/') ? dir.slice(0, -1) : dir;
    });
};`;

assert.ok(source.includes('require("fast-glob")'), "Next ESLint's glob import changed; review the adapter.");
if (!source.includes(adapted)) {
  assert.equal(source.split(original).length - 1, 1, "Next ESLint's rootDir implementation changed; review the adapter.");
  await writeFile(target, source.replace(original, adapted));
}
console.log("Next ESLint: applied the version-checked directory-glob adapter.");
