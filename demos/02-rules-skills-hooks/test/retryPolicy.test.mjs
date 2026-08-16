import assert from "node:assert/strict";
import test from "node:test";
import { retryDecision } from "../src/retryPolicy.mjs";

test("retries a timeout before the third attempt", () => {
  assert.deepEqual(retryDecision({ code: "TIMEOUT", attempt: 2 }), { retry: true, delayMs: 2000 });
});

test("stops retrying on the third attempt", () => {
  assert.deepEqual(retryDecision({ code: "TIMEOUT", attempt: 3 }), { retry: false, delayMs: 0 });
});

test("never retries authentication failure", () => {
  assert.deepEqual(retryDecision({ code: "AUTH_FAILED", attempt: 1 }), { retry: false, delayMs: 0 });
});

test("rejects a non-positive attempt number", () => {
  assert.throws(() => retryDecision({ code: "TIMEOUT", attempt: 0 }), /positive integer/);
});
