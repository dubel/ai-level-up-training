const suites = ["DeploymentGate", "RetryPolicy", "VsphereInventory", "JenkinsAdapter"];

console.log("CI bootstrap: loading runner configuration");
for (const suite of suites) {
  console.log(`suite ${suite}: discovered 30 tests`);
  for (let index = 1; index <= 30; index += 1) {
    console.log(`PASS ${suite} :: case-${String(index).padStart(2, "0")} (${10 + (index % 7)} ms)`);
  }
}

console.log("WARN transient connection retry 1/3");
console.log("WARN transient connection retry 2/3");
console.error("FAIL JenkinsAdapter :: rejects-expired-crumb");
console.error("AssertionError: expected status 403, received 200");
console.error("  at test/jenkinsAdapter.test.mjs:84:10");
console.error("Summary: 120 passed, 1 failed, 121 total");
process.exitCode = 1;

