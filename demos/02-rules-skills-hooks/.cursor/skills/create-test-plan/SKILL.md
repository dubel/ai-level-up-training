---
name: create-test-plan
description: Create an implementation-focused test plan for a requested change in this repository. Use before writing or modifying tests.
---

# Create test plan

1. Read the task and restate the behavioral delta in one paragraph.
2. Locate the production code and the nearest existing tests. Do not generate a generic testing tutorial.
3. List existing behavior that must not regress.
4. Build a risk table: behavior, failure mode, impact, proposed test level.
5. Propose cases covering happy path, boundary, invalid input and the most likely regression.
6. Map every case to a concrete test file and name.
7. Mark which cases belong to unit, integration or manual verification; avoid an integration test when a unit test proves the same contract.
8. Write the plan to `docs/test-plan-<task-slug>.md`.
9. Stop before editing test or production code. Ask for approval to implement.

The output must include the exact verification commands and one explicit non-goal.

