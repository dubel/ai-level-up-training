export function isDeploymentAllowed({ environment, releaseApproved, at }) {
  if (environment !== "production") return true;
  if (!releaseApproved) return false;

  const day = at.getUTCDay();
  return day !== 0 && day !== 6;
}

