# About this demo

## Quick orientation

This project contains a Boolean deployment policy and a small request to block production deployments on weekends. It uses a Ponytail-style review to compare the smallest local change with an intentionally over-engineered policy framework.

## Code at a glance

The current production function is deliberately simple:

```js
export function isDeploymentAllowed({ environment, releaseApproved }) {
  if (environment === "production") return releaseApproved === true;
  return true;
}
```

The minimal candidate adds one UTC weekday check:

```js
const day = at.getUTCDay();
return day !== 0 && day !== 6;
```

The over-engineered candidate introduces seven classes, including a registry, factory, policy engine, provider, and multiple policies for the same observable behavior.

## Deep dive

- `task.md` defines the weekend-freeze behavior and explicitly excludes holidays, user time zones, file configuration, an admin panel, and future policy design.
- `src/maintenanceWindow.mjs` and its tests form the baseline. The requested change is intentionally not implemented.
- `examples/minimal-candidate.mjs` and `examples/overengineered-candidate.mjs` are discussion fixtures, not files the participant should copy automatically.
- `.cursor/skills/ponytail-review/SKILL.md` walks a simplicity ladder: no code, configuration, existing function, local condition, helper, and only then a new abstraction.
- `scripts/measure.mjs` counts non-blank lines and classes. These numbers begin a maintenance discussion; they are not a quality score.

## Expected exercise result

The participant should first obtain an unconstrained implementation plan, then review it with `/ponytail-review`. The final plan should normally modify only the existing function and its test file, use `Date#getUTCDay`, preserve the Boolean return type, and add Saturday, Sunday, and weekday cases.

Run the deterministic comparison and baseline tests with:

```bash
node scripts/measure.mjs
node --test
```

The expected conclusion is not “fewer lines are always better.” It is that speculative extensibility must justify its maintenance cost against a concrete requirement.

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| Baseline tests do not cover weekends | The task is intentionally unimplemented | Confirm existing tests pass, then treat weekend tests as part of the requested change. |
| The agent proposes a policy framework | It optimized for hypothetical future requirements | Run `/ponytail-review`, point to the explicit non-goals, and request the first simplicity-ladder rung that satisfies the task. |
| The agent uses local time | It chose `getDay()` instead of `getUTCDay()` | Return to the task contract and require deterministic UTC behavior. |
| `/ponytail-review` is unavailable | Skill discovery is disabled | Attach the local `SKILL.md` and ask the agent to review the plan without implementation. |
| The minimal and over-engineered fixtures behave differently | They were invoked with different inputs or the task was expanded | Compare only the stated production weekend rule and verify behavior with tests before discussing design. |

**Trainer fallback:** run `scripts/measure.mjs`, display both candidate files, and ask participants to identify which new types encode an actual current requirement.
