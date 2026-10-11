import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { ESLint } from "eslint";

const require = createRequire(import.meta.url);
const { getRootDirs } = require("@next/eslint-plugin-next/dist/utils/get-root-dirs.js");

test("Next ESLint preserves exact roots, directory-only globs, and root arrays", async () => {
  const fixture = await mkdtemp(path.join(tmpdir(), "reqix-eslint-roots-"));
  const packages = path.join(fixture, "packages");
  const app = path.join(packages, "app");
  const docs = path.join(packages, "docs");
  const pages = path.join(app, "pages");
  await mkdir(pages, { recursive: true });
  const docsApp = path.join(docs, "app");
  await mkdir(docsApp, { recursive: true });
  await mkdir(path.join(packages, ".hidden"), { recursive: true });
  await writeFile(path.join(packages, "data.txt"), "This file must never become a root.");

  const roots = (rootDir) => getRootDirs({
    cwd: fixture,
    settings: rootDir === undefined ? {} : { next: { rootDir } },
  }).sort();

  try {
    assert.deepEqual(roots(), [fixture]);
    assert.deepEqual(roots(app), [app]);
    assert.deepEqual(roots(path.join(packages, "*")), [app, docs].sort());
    assert.deepEqual(roots(path.join(packages, "{app,docs}")), [app, docs].sort());
    assert.deepEqual(roots(path.join(packages, "**", "pages")), [pages]);
    assert.deepEqual(roots([app, docs, 42]), [app, docs].sort());
    assert.deepEqual(roots(path.join(packages, "missing-*")), []);
    assert.deepEqual(roots(path.join(app, "**")), [pages]);
    assert.deepEqual(roots(path.join(packages, "*", "**")), [app, docs, pages, docsApp].sort());
    assert.deepEqual(roots(path.join(packages, "{app,docs}", "**")), [pages, docsApp].sort());
    const relativeApp = path.relative(process.cwd(), app).split(path.sep).join("/");
    assert.deepEqual(roots(relativeApp), [relativeApp]);
    for (const unsupported of ["{app,{docs,other}}/**", "@(app|docs)", "app/**/**"]) {
      assert.throws(() => roots(path.join(packages, unsupported)), /Use a rootDir array of simple patterns/);
    }
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test("Next's existing navigation rule still reports errors for a glob-selected root", async () => {
  const fixture = await mkdtemp(path.join(tmpdir(), "reqix-eslint-rule-"));
  const app = path.join(fixture, "app");
  await mkdir(path.join(app, "pages"), { recursive: true });
  await writeFile(path.join(app, "pages", "index.tsx"), "export default function Home() { return null; }");
  try {
    const eslint = new ESLint({
      overrideConfig: { settings: { next: { rootDir: path.join(fixture, "*") } } },
    });
    const [result] = await eslint.lintText(
      'export default function Example() { return <a href="/">Home</a>; }',
      { filePath: "app/eslint-regression-fixture.tsx" },
    );
    assert.ok(result.messages.some((message) =>
      message.ruleId === "@next/next/no-html-link-for-pages" && message.severity === 2,
    ), "The original Next navigation rule must remain enabled and find the selected pages directory.");
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});
