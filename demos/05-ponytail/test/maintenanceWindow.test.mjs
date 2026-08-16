import assert from "node:assert/strict";
import test from "node:test";
import { isDeploymentAllowed } from "../src/maintenanceWindow.mjs";

test("requires approval in production", () => {
  assert.equal(isDeploymentAllowed({ environment: "production", releaseApproved: false }), false);
  assert.equal(isDeploymentAllowed({ environment: "production", releaseApproved: true }), true);
});

test("does not require release approval in staging", () => {
  assert.equal(isDeploymentAllowed({ environment: "staging", releaseApproved: false }), true);
});

