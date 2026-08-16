# Demo 07 — BMAD Quick Flow, workshop edition

This small repository demonstrates the core of the local BMAD Quick Flow:

```text
understand → investigate → implementation-ready spec → quick dev → self-check → adversarial review
```

This is not a full BMAD installation. Two local skills preserve the essential quality gates while keeping the demo within 30 minutes.

## Setup

```bash
node --test
```

Read `request.md`, but do not solve the task manually.

## Phase 1 — specification in Plan Mode (12 min)

Run in Cursor:

```text
/bmad-quick-spec request.md
```

The agent should:

1. define the behavioral delta and scope,
2. read `project-context.md`, the code, and the tests,
3. name concrete files and patterns,
4. save a spec with tasks and Given/When/Then criteria,
5. stop before coding.

Compare the result with `docs/example-tech-spec.md`. Do not copy the example into context before generating your own specification.

## Phase 2 — fresh context and implementation (12 min)

Approve the spec, start a **new conversation**, and run:

```text
/bmad-quick-dev docs/generated/tech-spec-blackout-windows.md
```

If the live spec has a different name, use its path.

The agent should complete the flow without checkpoints between small tasks, but stop after three repeated failures, a domain ambiguity, or discovery of a risky operation.

## Phase 3 — review (6 min)

- Open the diff, not the summary.
- Check every acceptance criterion.
- Ask a fresh context for an adversarial review.
- The participant decides whether to fix, reject as noise, or defer with a reason.

## Why a fresh conversation?

The specification should be a self-contained contract. The implementing agent must not depend on implicit decisions hidden in a long conversation history.
