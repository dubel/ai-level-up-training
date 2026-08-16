# Project context

## Stack

- JavaScript ESM on Node.js.
- Tests: `node:test` + `node:assert/strict`.
- No runtime dependencies.

## Domain conventions

- ISO date-only strings have format `YYYY-MM-DD` and represent UTC calendar days.
- A blackout window is inclusive at both `from` and `to` boundaries.
- Public decisions use `{ allowed, reason }`; do not change the shape.
- Reasons are stable lowercase kebab-case identifiers.

## Engineering rules

- Validate invalid ranges (`from > to`) at the boundary and throw `TypeError`.
- Prefer a small pure helper over a class or date library.
- Do not mutate input arrays or `Date` instances.
- Run `node --test test/deploymentWindow.test.mjs`, then `node --test`.

