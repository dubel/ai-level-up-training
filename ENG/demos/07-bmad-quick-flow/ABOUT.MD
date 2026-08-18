# About this demo

## Quick orientation

This project contains a small deployment-window function and a request for temporary production blackout dates. The exercise uses a BMAD-inspired two-stage flow: create a self-contained technical specification, then implement it in a fresh conversation.

## Code at a glance

The baseline gate validates the date and applies existing readiness and maintenance-window rules:

```js
if (!releaseReady) {
  return { allowed: false, reason: "release-not-ready" };
}

if (environment === "production" && at.getUTCHours() < 6) {
  return { allowed: false, reason: "outside-maintenance-window" };
}
```

`request.md` adds optional inclusive blackout ranges:

```js
blackoutWindows: [{ from: "2026-12-24", to: "2026-12-26", reason: "holiday-freeze" }]
```

## Deep dive

- `project-context.md` defines the stack, stable `{ allowed, reason }` contract, UTC date format, validation rules, and test commands.
- `.cursor/skills/bmad-quick-spec/SKILL.md` performs Understand, Investigate, Generate, and Review, then stops before coding.
- `docs/example-tech-spec.md` is a reference for evaluation, not input to the first spec-generation run.
- `.cursor/skills/bmad-quick-dev/SKILL.md` captures a baseline, implements tasks in dependency order, runs tests, checks every acceptance criterion, and requests adversarial review.
- The existing code deliberately does not implement blackout windows. This makes the generated spec and diff observable.

The fresh-conversation boundary tests whether the specification is genuinely self-contained. If implementation depends on hidden discussion history, the spec is not ready for development.

## Expected exercise result

Phase 1 should produce an approved `ready-for-dev` spec in `docs/generated/`. It should name exact files and actions, preserve the public result, define inclusive UTC boundaries, reject `from > to`, avoid a date library, and express acceptance criteria in Given/When/Then form.

Phase 2 should implement the approved spec and provide evidence for every criterion. The narrow test and full suite should pass:

```bash
node --test test/deploymentWindow.test.mjs
node --test
```

The participant should finish by classifying adversarial-review findings as valid, noise, or deferred with justification rather than accepting every suggestion automatically.

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| The BMAD skills do not appear | Local skill discovery is unavailable | Attach the appropriate `SKILL.md` manually and run the spec and dev phases in separate conversations. |
| The agent starts coding during quick-spec | The planning boundary was not enforced | Stop, discard only this demo's edits, restart in Plan Mode, and state “Do not implement code.” |
| The generated spec mirrors the example exactly | `docs/example-tech-spec.md` contaminated the context | Start fresh and exclude the example until after the participant's spec is complete. |
| Quick-dev cannot find the spec | The generated filename differs from the README example | Pass the actual saved path to `/bmad-quick-dev`. |
| Existing tests fail before implementation | The baseline is not clean | Stop and diagnose the baseline; do not attribute pre-existing failures to the new spec. |
| The agent adds recurrence, UI, or a date library | It ignored explicit non-goals | Reject the plan or diff and return to the approved specification. |
| Time runs out before implementation | The exercise is deliberately time-boxed | Evaluate the spec against `docs/example-tech-spec.md`; a strong contract is still a valid result. |

**Trainer fallback:** generate and review only the specification, then use `docs/example-tech-spec.md` to walk through the expected implementation order and verification evidence.
