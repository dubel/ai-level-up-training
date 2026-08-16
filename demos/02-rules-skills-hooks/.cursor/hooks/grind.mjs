import { existsSync, readFileSync } from "node:fs";

let input = "";
for await (const chunk of process.stdin) input += chunk;

const event = input ? JSON.parse(input) : {};
const maxIterations = 5;
const scratchpadPath = ".cursor/scratchpad.md";
const scratchpad = existsSync(scratchpadPath) ? readFileSync(scratchpadPath, "utf8") : "";

if (event.status !== "completed" || Number(event.loop_count || 0) >= maxIterations || scratchpad.includes("DONE")) {
  console.log(JSON.stringify({}));
} else {
  console.log(JSON.stringify({
    followup_message: `Continue only if tests or acceptance criteria are still failing. Iteration ${Number(event.loop_count || 0) + 1}/${maxIterations}. Write DONE to ${scratchpadPath} when verified.`
  }));
}

