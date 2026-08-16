const retryableCodes = new Set(["TIMEOUT", "TEMPORARY_UNAVAILABLE"]);

export function retryDecision({ code, attempt }) {
  if (!Number.isInteger(attempt) || attempt < 1) {
    throw new TypeError("attempt must be a positive integer");
  }

  if (!retryableCodes.has(code) || attempt >= 3) {
    return { retry: false, delayMs: 0 };
  }

  return { retry: true, delayMs: attempt * 1000 };
}

