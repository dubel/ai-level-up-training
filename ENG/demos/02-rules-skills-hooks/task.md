# Test-plan task

Add handling for the `RATE_LIMITED` code to `retryPolicy`.

- First retry: 500 ms.
- Each subsequent retry: twice as long.
- No more than four attempts.
- `AUTH_FAILED` must remain non-retryable.
- The function's public result shape remains unchanged.
