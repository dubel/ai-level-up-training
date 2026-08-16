import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = ["overengineered-candidate.mjs", "minimal-candidate.mjs"];

const rows = files.map((file) => {
  const text = readFileSync(join(root, "examples", file), "utf8");
  const nonBlankLines = text.split("\n").filter((line) => line.trim()).length;
  const types = (text.match(/\bclass\s+/g) || []).length;
  return { candidate: file, nonBlankLines, newClasses: types };
});

console.table(rows);
console.log("LOC is a discussion starter, not a quality score. Verify behavior and maintainability.");
