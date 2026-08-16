# Prompt for run B

Work in Plan Mode first. Do not edit files.

Goal: implement the requirement from `@task.md` in the existing deployment gate.

Context:

- Read `@src/deploymentGate.mjs` and `@test/deploymentGate.test.mjs`.
- Attach the `@project-context` rule.
- Find the existing validation and denial-reason patterns.

Constraints:

- Preserve the public `{ allowed, reason }` result.
- Do not add dependencies or new abstractions.
- Do not expand the task beyond `changeRisk`.

Acceptance criteria are in `@task.md`. The plan must name the exact files, test cases, and change order. After implementation, run the narrowest test and then `node --test`; show the diff and remaining uncertainties.
