import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const lockfile = JSON.parse(
  await readFile(new URL("../package-lock.json", import.meta.url), "utf8"),
);
const packages = Object.entries(lockfile.packages || {});

assert.equal(lockfile.lockfileVersion, 3, "package-lock.json 必须使用 lockfileVersion 3");

const untrustedSources = packages.flatMap(([name, value]) => {
  const resolved = value?.resolved;
  if (!resolved || resolved.startsWith("https://registry.npmjs.org/")) return [];
  return [`${name || "<root>"}: ${resolved}`];
});

assert.deepEqual(
  untrustedSources,
  [],
  `package-lock.json 只能从 npm 官方 HTTPS 源下载依赖：\n${untrustedSources.join("\n")}`,
);

console.log(`依赖源校验通过：${packages.length - 1} 个包均使用 npm 官方 HTTPS 源。`);
