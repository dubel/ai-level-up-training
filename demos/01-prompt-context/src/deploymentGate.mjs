const ENVIRONMENTS = new Set(["development", "staging", "production"]);
const TEST_STATUSES = new Set(["passed", "failed", "skipped"]);

export function evaluateDeployment({
  environment,
  testStatus,
  releaseApproved,
  activeIncidents = 0
}) {
  if (!ENVIRONMENTS.has(environment)) {
    throw new TypeError(`Invalid environment: ${environment}`);
  }

  if (!TEST_STATUSES.has(testStatus)) {
    throw new TypeError(`Invalid testStatus: ${testStatus}`);
  }

  if (testStatus !== "passed") {
    return { allowed: false, reason: "tests-not-passed" };
  }

  if (activeIncidents > 0) {
    return { allowed: false, reason: "active-incident" };
  }

  if (environment === "production" && !releaseApproved) {
    return { allowed: false, reason: "release-not-approved" };
  }

  return { allowed: true, reason: "ready" };
}

