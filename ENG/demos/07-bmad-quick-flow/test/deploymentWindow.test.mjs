import assert from "node:assert/strict";
import test from "node:test";
import { evaluateWindow } from "../src/deploymentWindow.mjs";

test("allows a ready production release after 06:00 UTC", () => {
  assert.deepEqual(
    evaluateWindow({ environment: "production", at: new Date("2026-08-16T08:00:00Z"), releaseReady: true }),
    { allowed: true, reason: "ready" }
  );
});

test("blocks a production release before 06:00 UTC", () => {
  assert.deepEqual(
    evaluateWindow({ environment: "production", at: new Date("2026-08-16T05:59:00Z"), releaseReady: true }),
    { allowed: false, reason: "outside-maintenance-window" }
  );
});

test("blocks a release that is not ready", () => {
  assert.deepEqual(
    evaluateWindow({ environment: "staging", at: new Date("2026-08-16T08:00:00Z"), releaseReady: false }),
    { allowed: false, reason: "release-not-ready" }
  );
});

test("rejects an invalid date", () => {
  assert.throws(
    () => evaluateWindow({ environment: "production", at: new Date("invalid"), releaseReady: true }),
    /valid Date/
  );
});

