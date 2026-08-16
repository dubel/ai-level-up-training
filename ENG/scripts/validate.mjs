import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();
const errors = [];
const required = [
  "presentation/index.html",
  "presentation/styles.css",
  "presentation/slides.js",
  "participant-agenda.md",
  "trainer_script.md",
  "demos/README.md"
];

for (const file of required) {
  if (!existsSync(join(root, file))) errors.push(`Missing required file: ${file}`);
}

const htmlPath = join(root, "presentation/index.html");
if (existsSync(htmlPath)) {
  const html = readFileSync(htmlPath, "utf8");
  const slideCount = (html.match(/<section class="slide/g) || []).length;
  if (slideCount !== 39) errors.push(`Expected 39 slides, found ${slideCount}`);
  if (!html.includes('lang="en"')) errors.push("Presentation language must be English");

  for (const match of html.matchAll(/(?:href|src)="(?!https?:|#|data:)([^"]+)"/g)) {
    const target = match[1].split("#")[0];
    if (!target) continue;
    const absolute = resolve(dirname(htmlPath), target);
    if (!existsSync(absolute)) errors.push(`Broken local presentation reference: ${match[1]}`);
  }
}

const ignored = readFileSync(join(root, ".gitignore"), "utf8").split(/\r?\n/);
if (!ignored.includes("trainer_script.md")) errors.push("trainer_script.md is not in .gitignore");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Validation passed: 39 slides, required artifacts present, local links resolved.");
