# Demo 05 — Ponytail: the least code that works

Ponytail applies YAGNI and a “simplicity ladder”: first no code, then configuration, an existing function, one local condition, and only then a new abstraction.

## Fast deterministic demo

```bash
node scripts/measure.mjs
node --test
```

`examples/overengineered-candidate.mjs` and `examples/minimal-candidate.mjs` implement the same small condition. This comparison does not prove quality; it opens a discussion about maintenance cost.

## Demo in Cursor

1. Ask the agent: `Plan the implementation of task.md. Do not edit files.`
2. Save the plan and count new types, files, configuration, and “future” extensibility.
3. Start a new conversation and run `/ponytail-review` against the plan.
4. Only then ask for the smallest plan that satisfies every criterion.

## Upstream in Cursor

The Ponytail project provides a file for `.cursor/rules/`. This demo uses a local, manually invoked review skill so the effect remains controlled and does not affect other exercises.

Source: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail).
