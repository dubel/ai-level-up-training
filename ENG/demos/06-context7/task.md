# Task: test session expiry without waiting

Propose the smallest Playwright test that:

- opens the dashboard with an active session,
- takes control of the page clock through the API available in the `package.json` version,
- advances time by 10 minutes without real waiting,
- confirms that `Session expired` appears,
- does not use `waitForTimeout`, manual `Date.now` mocks, or a new dependency.

Do not implement the test yet. We need a verified API, a short code sketch, and a list of application assumptions.
