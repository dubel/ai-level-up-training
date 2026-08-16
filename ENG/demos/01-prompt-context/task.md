# Task: change risk in the deployment gate

Operators need to stop a high-risk production deployment until an architect approves the change.

Business criteria:

- `low` and `medium` require no additional approval.
- `high` in `production` requires `architectureApproved: true`.
- `high` outside production follows the existing rules.
- A missing or unknown `changeRisk` value returns a clear input error.
- The public `{ allowed, reason }` result shape must not change.

Out of scope: new classes, libraries, logging, persistence, and pipeline changes.
