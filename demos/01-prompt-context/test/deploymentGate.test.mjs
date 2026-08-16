import assert from "node:assert/strict";
import test from "node:test";
import { evaluateDeployment } from "../src/deploymentGate.mjs";

test("allows a staging deployment after tests pass", () => {
  assert.deepEqual(
    evaluateDeployment({ environment: "staging", testStatus: "passed", releaseApproved: false }),
    { allowed: true, reason: "ready" }
  );
});

test("requires release approval in production", () => {
  assert.deepEqual(
    evaluateDeployment({ environment: "production", testStatus: "passed", releaseApproved: false }),
    { allowed: false, reason: "release-not-approved" }
  );
});

test("blocks deployments during an active incident", () => {
  assert.deepEqual(
    evaluateDeployment({ environment: "staging", testStatus: "passed", releaseApproved: true, activeIncidents: 1 }),
    { allowed: false, reason: "active-incident" }
  );
});

test("rejects an unknown environment", () => {
  assert.throws(
    () => evaluateDeployment({ environment: "prod", testStatus: "passed", releaseApproved: true }),
    /Invalid environment/
  );
});

