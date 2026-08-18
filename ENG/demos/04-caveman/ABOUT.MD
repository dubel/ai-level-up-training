# About this demo

## Quick orientation

This project is a diagnostic-writing exercise. Participants analyze a short vCenter deployment log twice: once normally and once with a local Caveman-style skill that removes verbal padding while preserving evidence, action, verification, and uncertainty.

## Code at a glance

The log contains the complete causal chain:

```text
WARN template=ubuntu-2404 metadata-cache-age=26h
ERROR template lookup failed: key="ubuntu-2404" cache entry expired ttl=24h
ERROR deployment blocked reason=TEMPLATE_NOT_FOUND
```

The local skill asks the agent to keep four diagnostic elements:

```text
cause -> evidence -> safe action -> verification
```

## Deep dive

- `incident.log` is the only evidence source. Authentication succeeded, the metadata cache entry expired, and no resources were created.
- `prompt.md` asks four narrow questions and forbids invented facts.
- `.cursor/skills/caveman-output/SKILL.md` changes response style, not diagnostic logic or code.
- `fixtures/verbose-answer.md` and `fixtures/terse-answer.md` are deterministic comparison samples.
- `scripts/measure.mjs` reports words, characters, and an approximate byte-based token count.

The core lesson is that brevity is useful only when it preserves exact commands, identifiers, error messages, and uncertainty. A shorter incorrect answer is not an optimization.

## Expected exercise result

Run:

```bash
node scripts/measure.mjs
```

Then compare two fresh Cursor conversations. The Caveman-style response should be shorter while still stating:

- cause: expired `ubuntu-2404` metadata cache entry,
- evidence: cache age 26h versus TTL 24h, followed by lookup failure,
- smallest safe fix: refresh metadata before returning `TEMPLATE_NOT_FOUND`,
- verification: repeat the lab precheck and confirm a fresh lookup with no unexpected resources,
- uncertainty: the log does not explain why automatic refresh failed.

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| `/caveman-output` is not discovered | Local skill discovery is unavailable | Attach `.cursor/skills/caveman-output/SKILL.md` manually and ask the agent to follow it before sending `prompt.md`. |
| The two answers have similar length | The baseline answer was already concise | Compare preservation of diagnostic fields, then use the supplied fixtures for a measurable contrast. |
| The short answer drops uncertainty or evidence | Brevity was treated as the only objective | Reject the answer and require cause, evidence, safe fix, verification, and uncertainty explicitly. |
| `scratch/normal.md` cannot be written | The `scratch` directory does not exist or file edits require approval | Let the agent create the directory after approval, save the response manually, or compare in the chat UI. |
| Upstream installation fails | Network or the current installation command changed | Do not install live. The local skill and fixtures are sufficient for the exercise. |

**Trainer fallback:** run `scripts/measure.mjs` and review the two fixture answers line by line without invoking any external skill.
