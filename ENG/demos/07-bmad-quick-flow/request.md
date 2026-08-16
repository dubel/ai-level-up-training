# Request: blackout windows

The operations team needs temporary production-deployment blocks.

Requirements:

- `evaluateWindow` accepts optional `blackoutWindows: [{ from, to, reason }]`.
- Each range includes both boundaries and uses UTC `YYYY-MM-DD` dates.
- In production, a date inside any window returns `{ allowed: false, reason: <reason> }`.
- Outside production, a blackout does not block deployment.
- An empty blackout list preserves current behavior.
- A range where `from > to` is an input error.

Out of scope: local time zones, recurring windows, holidays, persistence, UI, and retrieving changes from an API.
