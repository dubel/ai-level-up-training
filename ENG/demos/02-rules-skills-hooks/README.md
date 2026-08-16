# Demo 02 — Rule vs Skill vs Hook

Goal: separate three responsibilities in a working Cursor project.

## What to inspect

- `.cursor/rules/team-conventions.mdc` — short, permanent guidance scoped to source and test files.
- `.cursor/skills/create-test-plan/SKILL.md` — a procedure started as `/create-test-plan` or selected by the agent.
- `.cursor/hooks.json.example` + `.cursor/hooks/grind.mjs` — an optional automatic loop limited to five iterations.

The hook is intentionally disabled. Do not copy the example to `hooks.json` before discussing stop conditions and the iteration limit.

## Walkthrough

1. Open this directory as a separate project in Cursor.
2. Run `node --test`.
3. Ask: `Which project instructions are currently active, and which files do they apply to?`
4. Run `/create-test-plan` for `task.md`.
5. Check that the agent reads the source and tests before producing a generic list.
6. Open `hooks.json.example` and discuss when the hook helps, when it loops cost, and why it has a limit.

## Participant task

Create a skill for one team process. Definition of done:

- an unambiguous trigger in `description`,
- 5–9 steps,
- references to existing patterns,
- a verification command,
- at least one HALT or approval condition.
