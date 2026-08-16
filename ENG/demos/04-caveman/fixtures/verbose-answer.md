Based on the supplied log excerpt, the most likely direct cause is the expiration of the local metadata-cache entry for the `ubuntu-2404` template. The log reports a cache age of 26 hours with a 24-hour TTL and then records `template lookup failed`.

It is worth noting that authentication to vCenter succeeded, so credentials do not appear to be the problem. The smallest safe fix would be to refresh the cache entry for this template, or change the lookup path so that an expired entry causes fresh metadata to be retrieved before returning `TEMPLATE_NOT_FOUND`.

To verify the fix, repeat the precheck for `build-842` in the lab environment and check that lookup retrieves a fresh entry, the deployment advances to the next phase, and no unexpected resources are created. The log does not contain enough evidence to explain why automatic refresh did not run.
