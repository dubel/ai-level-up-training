# About this demo

## Quick orientation

This project demonstrates terminal-output compression with RTK (Rust Token Killer). A deterministic script prints a noisy CI log with one meaningful failure, and the comparison script measures how much output reaches the agent while checking whether the failure signal survives.

## Code at a glance

`scripts/noisy-ci.mjs` prints many passing cases and one failure:

```js
console.error("FAIL JenkinsAdapter :: rejects-expired-crumb");
console.error("AssertionError: expected status 403, received 200");
console.error("Summary: 120 passed, 1 failed, 121 total");
```

`scripts/compare-output.mjs` measures raw and compact output:

```js
const bytes = Buffer.byteLength(output);
const lines = output.trimEnd().split("\n").length;
return { lines, bytes, approxTokens: Math.ceil(bytes / 4) };
```

## Deep dive

RTK sits between a shell command and the agent context. It does not optimize the prompt, model reasoning, or response, and it does not change the command's code. The demo therefore reports shell-output lines and bytes rather than claiming total billing savings.

The no-install path uses `fixtures/simulated-rtk-output.txt`, which is clearly labelled as a training fixture. With RTK installed, the same comparison can run the real `rtk test` wrapper and inspect `rtk gain`.

## Expected exercise result

Run:

```bash
node scripts/compare-output.mjs
```

The result should show a large raw log and a much smaller compact result. Both must preserve the useful diagnostic signal: the failing test name, expected and actual status, source location, and pass/fail summary.

Participants should conclude that “less output” is valuable only when the information needed for diagnosis remains recoverable. Record output reduction separately from complete-session cost.

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| `rtk` is not installed | The full optional integration was not prepared | Use `node scripts/compare-output.mjs`; it automatically uses the labelled fixture. Do not call the result a live RTK benchmark. |
| `brew install rtk` or `rtk init` fails | Network, package manager, permissions, or upstream commands changed | Do not troubleshoot installation during the workshop. Use the fixture and verify current upstream instructions later. |
| Real RTK output differs from the fixture | RTK version or command support changed | Compare the preserved signal rather than expecting identical formatting or percentages. |
| Compact output hides the cause | The filter removed detail needed for diagnosis | Inspect RTK's saved full log or rerun the narrow failing command without filtering. |
| The Cursor hook affects other projects | RTK was initialized globally | Demonstrate manual `rtk test` instead, and agree global rollout with platform and security owners. |
| The noisy script exits with code 1 | This is the intended simulated CI failure | Confirm that the failure is `JenkinsAdapter :: rejects-expired-crumb`; do not “fix” the fixture. |

**Trainer fallback:** show the raw command and `fixtures/simulated-rtk-output.txt` side by side, then run only the local measurement script.
