export function isDeploymentAllowed({ environment, releaseApproved }) {
  if (environment === "production") return releaseApproved === true;
  return true;
}

