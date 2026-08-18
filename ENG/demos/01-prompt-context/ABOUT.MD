# About this demo

## Quick orientation

This project contains a small deployment gate: a pure function decides whether a deployment may proceed based on environment, test status, active incidents, and release approval. The exercise does not begin with coding; it compares a vague prompt with a task contract that exposes assumptions before implementation.

## Code at a glance

The current decision function returns a stable object instead of performing a deployment:

```js
if (testStatus !== "passed") {
  return { allowed: false, reason: "tests-not-passed" };
}

if (environment === "production" && !releaseApproved) {
  return { allowed: false, reason: "release-not-approved" };
}
```

The requested change in `task.md` adds a `changeRisk` input. A high-risk production change must require architecture approval, while the public `{ allowed, reason }` contract remains unchanged.

## Deep dive

- `src/deploymentGate.mjs` is the production code and deliberately uses validation plus early returns.
- `test/deploymentGate.test.mjs` defines the baseline behavior. All baseline tests should pass before the exercise.
- `task.md` contains the business delta and non-goals.
- `prompts/contract.md` provides Goal, Context, Constraints, Acceptance Criteria, and Verification.
- `.cursor/rules/project-context.mdc` captures repository-specific conventions and should be attached manually with `@project-context`.

Run A asks the agent to plan from a short instruction. Run B starts a fresh conversation and supplies the complete contract. Compare exact files, test cases, questions, assumptions, and non-goals rather than response length.

## Expected exercise result

The participant should finish with two plans and be able to identify which product or domain decisions the model made implicitly in Run A. The approved Run B plan should validate `changeRisk`, preserve the public return shape, avoid new abstractions, and name tests for low, medium, high-production-approved, high-production-unapproved, non-production, missing, and invalid values.

Implementation is optional. If implemented, the narrow test and then the full suite should pass:

```bash
node --test test/deploymentGate.test.mjs
node --test
```

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| `node --test` is unavailable | Node.js is missing or too old | Use a current Node.js release, or perform the planning comparison without implementation. |
| Cursor does not apply the project rule | The rule is manual or unsupported by the installed Cursor version | Open `.cursor/rules/project-context.mdc`, attach it as file context, and tell the agent to follow it for this task. |
| The agent edits immediately | Agent mode was used without a planning boundary | Stop the run, review and discard only this demo's changes, then restart in Plan Mode with “Do not edit files.” |
| Run A already produces an excellent plan | The model reconstructed the contract successfully | Treat this as a useful result. Ask whether a fresh model and another teammate would reconstruct the same decisions reliably. |
| Run B is merely longer | The contract was added as prose without concrete evidence | Require exact files, named test cases, non-goals, and verification commands. |

**Trainer fallback:** use the supplied baseline files and compare the two prompts verbally. The learning objective is visible decision ownership, not a successful live code generation.
