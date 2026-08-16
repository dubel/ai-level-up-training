# Demo 01 — prompt vs contract

Goal: show that delegation quality improves through context, constraints, and acceptance criteria, not through a “magic” phrase.

## Setup

1. Open **this directory** as a separate project in Cursor.
2. Run `node --test`; the baseline tests should pass.
3. Open `task.md`, `src/deploymentGate.mjs`, and `test/deploymentGate.test.mjs`.

## Run A — minimal prompt

In Agent mode, enter:

```text
Add change-risk handling to the deployment gate. Plan first; do not edit files.
```

Record:

- which questions the agent asked,
- which assumptions it made on its own,
- whether it named concrete files and tests.

## Run B — contract

Start a new conversation and paste the prompt from `prompts/contract.md`. Attach the rule manually with `@project-context`.

Compare plans A and B. Do not implement until the plan identifies exact changes, tests, and out-of-scope items.

## Optional implementation

After approving the plan:

```text
Implement the approved plan. Run the narrowest tests first, then the complete node --test suite. Do not change tests merely to make them pass. Finish by showing the diff and remaining risks.
```

## Debrief

A good result is not a longer answer. It is a result with fewer invisible decisions made by the model.
