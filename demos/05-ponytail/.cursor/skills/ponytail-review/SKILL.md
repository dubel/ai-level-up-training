---
name: ponytail-review
description: Review a proposed plan or current diff for over-engineering, YAGNI violations and deletable code before implementation or merge.
---

# Ponytail review

Do not implement. Return a delete/simplify list.

1. Restate the required observable behavior and explicit non-goals.
2. Walk the simplicity ladder and stop at the first rung that satisfies the requirement:
   - no code,
   - existing configuration,
   - existing function or parameter,
   - one local condition,
   - small helper,
   - only then a new abstraction.
3. Flag speculative extensibility, single-use factories, wrappers with no policy, premature configuration and duplicated domain vocabulary.
4. For each finding state: remove/simplify, why it is unnecessary now, and the smaller replacement.
5. Preserve required tests, validation, security and observability. Minimal is not careless.
6. End with the smallest file list and estimated net lines added.

