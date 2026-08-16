export function evaluateWindow({ environment, at, releaseReady }) {
  if (!(at instanceof Date) || Number.isNaN(at.valueOf())) {
    throw new TypeError("at must be a valid Date");
  }

  if (!releaseReady) {
    return { allowed: false, reason: "release-not-ready" };
  }

  if (environment === "production" && at.getUTCHours() < 6) {
    return { allowed: false, reason: "outside-maintenance-window" };
  }

  return { allowed: true, reason: "ready" };
}

