# Demo 03 — RTK: less terminal noise

RTK (Rust Token Killer) filters the output of common commands before the agent receives it as context. It does not change code or tests.

## Installation-free version

```bash
node scripts/compare-output.mjs
```

The script produces a noisy, deterministic “CI log.” If `rtk` is unavailable, it compares that output with a short, clearly labelled simulation. The result shows lines, bytes, and a `bytes / 4` approximation—the same simple estimate described by RTK.

## Full demo

Install before the workshop, not in front of participants:

```bash
brew install rtk
rtk --version
rtk init -g --agent cursor
```

After restarting Cursor, its hook can rewrite agent shell commands. Manual run:

```bash
node scripts/noisy-ci.mjs
rtk test node scripts/noisy-ci.mjs
rtk gain
```

In Agent mode, use:

```text
Run noisy-ci once without RTK and once through `rtk test`. Do not fix anything. Compare line count, preserved failure signal, and the bytes/4 estimate.
```

## Important caveats

- The “60–90%” in the project description concerns shell-command output reduction, not the complete session bill.
- The prompt, system instructions, reasoning, model response, and retries still have a cost.
- Compact output can hide diagnostic detail. On failure, inspect RTK's full saved log or rerun the narrow command without filtering.
- The Cursor hook is user-level configuration. Agree its rollout with security and the platform team.

Source: [rtk-ai/rtk](https://github.com/rtk-ai/rtk).
