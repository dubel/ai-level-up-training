import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, encoding: "utf8" });
  return `${result.stdout || ""}${result.stderr || ""}`;
}

function metrics(label, output) {
  const bytes = Buffer.byteLength(output);
  const lines = output.trimEnd().split("\n").length;
  return { label, lines, bytes, approxTokens: Math.ceil(bytes / 4) };
}

const raw = run(process.execPath, ["scripts/noisy-ci.mjs"]);
const hasRtk = spawnSync("rtk", ["--version"], { encoding: "utf8" }).status === 0;
const compact = hasRtk
  ? run("rtk", ["test", process.execPath, "scripts/noisy-ci.mjs"])
  : readFileSync(join(root, "fixtures/simulated-rtk-output.txt"), "utf8");

const rows = [metrics("raw command", raw), metrics(hasRtk ? "RTK" : "simulated RTK sample", compact)];
console.table(rows);
console.log("\nSignal kept in compact output:\n");
console.log(compact.trim());
if (!hasRtk) console.log("\nRTK is not installed. This compact output is a labelled fixture, not an RTK benchmark.");

