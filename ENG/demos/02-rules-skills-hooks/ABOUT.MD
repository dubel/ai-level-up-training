# About this demo

## Quick orientation

This project contains a retry-decision function and three different ways of giving Cursor reusable behavior: a scoped rule, a procedural skill, and an event-driven hook example. The exercise shows that permanent conventions, task procedures, and automatic reactions belong in different mechanisms.

## Code at a glance

The production function decides whether a failure is retryable and how long to wait:

```js
if (!retryableCodes.has(code) || attempt >= 3) {
  return { retry: false, delayMs: 0 };
}

return { retry: true, delayMs: attempt * 1000 };
```

`task.md` asks for `RATE_LIMITED` handling with exponential delay and at most four attempts. The exercise normally creates a test plan before changing this function.

## Deep dive

- `.cursor/rules/team-conventions.mdc` describes stable implementation and test conventions for matching source files.
- `.cursor/skills/create-test-plan/SKILL.md` is a reusable procedure. It reads the task, production code, and nearest tests, then writes an implementation-focused plan and stops before editing.
- `.cursor/hooks.json.example` points to `.cursor/hooks/grind.mjs`, which can request another agent iteration only while work remains incomplete.
- The hook is intentionally disabled. Its five-iteration limit and `DONE` marker are safety controls, not a recommendation to enable autonomous loops globally.

The important distinction is behavioral:

- **Rule:** knowledge that should consistently constrain relevant work.
- **Skill:** a multi-step method for completing a type of task.
- **Hook:** deterministic automation triggered by an event.

## Expected exercise result

Running `/create-test-plan` for `task.md` should produce a concrete plan mapped to `src/retryPolicy.mjs` and `test/retryPolicy.test.mjs`. It should cover the first 500 ms delay, exponential growth, the four-attempt limit, `AUTH_FAILED` regression behavior, invalid input, and exact verification commands without modifying code.

Participants should also create or outline one small skill for a real team process. A good result has an explicit trigger, five to nine ordered steps, pattern sources, verification, output location, and at least one HALT or approval condition.

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| `/create-test-plan` does not appear | Skill discovery is unavailable or disabled | Attach `.cursor/skills/create-test-plan/SKILL.md` manually and ask the agent to follow the procedure for `task.md`. |
| The agent produces a generic testing tutorial | It did not inspect local code and tests | Require it to name exact files, existing behavior, failure modes, and test names before continuing. |
| The rule appears inactive | It is scoped or not automatically selected | Attach `@team-conventions` manually, or add the file as context. |
| The hook does nothing | `hooks.json.example` is intentionally not active | Discuss the configuration without enabling it, or copy it only inside a disposable demo after agreeing on the stop conditions. |
| The hook loops or creates repeated cost | Completion status or the `DONE` marker is missing | Stop immediately. Keep the example disabled and inspect the event payload and iteration count offline. |

**Trainer fallback:** review the three files side by side and classify each responsibility verbally. The skill can be executed by pasting its steps into a fresh conversation; the hook does not need to run live.
