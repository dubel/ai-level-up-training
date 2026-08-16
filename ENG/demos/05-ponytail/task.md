# Task: weekend freeze

Extend `isDeploymentAllowed`:

- in `production`, block deployments on Saturday or Sunday,
- in `staging` and `development`, the weekend does not change the decision,
- the `at` parameter is a `Date` instance,
- preserve the existing public Boolean result,
- add tests for Saturday, Sunday, and a weekday.

Out of scope: holidays, user time zones, file-based configuration, an admin panel, and future policies.
