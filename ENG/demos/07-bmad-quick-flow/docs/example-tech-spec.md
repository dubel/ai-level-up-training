---
title: Production blackout windows
slug: blackout-windows
status: ready-for-dev
stepsCompleted: [1, 2, 3, 4]
tech_stack: [Node.js, JavaScript ESM, node:test]
files_to_modify:
  - src/deploymentWindow.mjs
  - test/deploymentWindow.test.mjs
---

# Production blackout windows

## Problem

There is no way to temporarily stop production deployments without changing the code that calls the gate.

## Solution

Extend the `evaluateWindow` input with an optional list of inclusive date ranges and perform a local, pure check before the existing readiness decision.

## Scope

In scope: production blocks in UTC, stable reasons, reversed-range validation, and tests.  
Out of scope: recurrence, local time zones, persistence, an API, a UI, and a date library.

## Context for development

- Preserve the `{ allowed, reason }` result.
- `src/deploymentWindow.mjs` uses early returns and stable reason identifiers.
- Tests live in `test/deploymentWindow.test.mjs` and use `node:test`.
- The input `at` is a `Date`; ranges are UTC ISO date-only strings.

## Implementation tasks

- [ ] Task 1: Add a small helper that validates and checks an inclusive UTC range.
  - File: `src/deploymentWindow.mjs`
  - Action: compare normalized `YYYY-MM-DD` strings; throw `TypeError` when `from > to`.
  - Notes: no class or dependency; do not mutate input.
- [ ] Task 2: Block production in the first matching blackout window.
  - File: `src/deploymentWindow.mjs`
  - Action: accept `blackoutWindows = []`; skip the check outside production; return the window reason.
- [ ] Task 3: Add behavioral and regression tests.
  - File: `test/deploymentWindow.test.mjs`
  - Action: cover a date inside the range, both boundaries, staging, an empty list, and a reversed range.

## Acceptance criteria

- [ ] AC1: Given production and a date inside a window, when `evaluateWindow` runs, then it returns a denial with that window's reason.
- [ ] AC2: Given a date equal to `from` or `to`, when the check runs, then both boundaries are blocked.
- [ ] AC3: Given staging and a matching window, when the check runs, then the result preserves the existing decision.
- [ ] AC4: Given no windows, when a call uses the old contract, then existing tests pass unchanged.
- [ ] AC5: Given a range where `from > to`, when the input is validated, then the function throws a `TypeError` naming the invalid blackout range.

## Verification

```bash
node --test test/deploymentWindow.test.mjs
node --test
```

## Risks

- Comparison must use UTC so the process's local time zone cannot shift the day.
- Overlapping windows return the reason from the first matching item; list order remains the caller's decision.
