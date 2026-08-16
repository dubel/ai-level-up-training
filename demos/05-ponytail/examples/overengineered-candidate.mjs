class DeploymentPolicy {
  evaluate() {
    throw new Error("Not implemented");
  }
}

class ApprovalPolicy extends DeploymentPolicy {
  evaluate(context) {
    return context.releaseApproved === true;
  }
}

class WeekendPolicy extends DeploymentPolicy {
  constructor(calendarProvider) {
    super();
    this.calendarProvider = calendarProvider;
  }

  evaluate(context) {
    const day = this.calendarProvider.dayOfWeek(context.at);
    return day !== 0 && day !== 6;
  }
}

class UtcCalendarProvider {
  dayOfWeek(date) {
    return date.getUTCDay();
  }
}

class PolicyRegistry {
  constructor() {
    this.policies = new Map();
  }

  register(environment, policies) {
    this.policies.set(environment, policies);
    return this;
  }

  forEnvironment(environment) {
    return this.policies.get(environment) || [];
  }
}

class DeploymentPolicyEngine {
  constructor(registry) {
    this.registry = registry;
  }

  evaluate(context) {
    return this.registry.forEnvironment(context.environment)
      .every((policy) => policy.evaluate(context));
  }
}

class DeploymentPolicyEngineFactory {
  static create() {
    const calendar = new UtcCalendarProvider();
    const registry = new PolicyRegistry()
      .register("production", [new ApprovalPolicy(), new WeekendPolicy(calendar)]);

    return new DeploymentPolicyEngine(registry);
  }
}

export function isDeploymentAllowed(context) {
  return DeploymentPolicyEngineFactory.create().evaluate(context);
}

