import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = ["verbose-answer.md", "terse-answer.md"];
const rows = files.map((file) => {
  const text = readFileSync(join(root, "fixtures", file), "utf8");
  return {
    answer: file,
    words: text.trim().split(/\s+/).length,
    chars: text.length,
    approxTokens: Math.ceil(Buffer.byteLength(text) / 4)
  };
});

console.table(rows);
console.log("Check quality manually: cause, evidence, safe fix, verification, uncertainty.");

