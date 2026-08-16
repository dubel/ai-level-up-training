# Demo 04 — Caveman: shorter agent responses

Goal: show the difference between technical completeness and verbal excess.

## Installation-free demo

```bash
node scripts/measure.mjs
```

Compare the two saved answer variants. Then, in Cursor:

1. Paste the prompt from `prompt.md` without the skill.
2. Save the response to `scratch/normal.md` (the directory is intentionally absent; the agent may create it).
3. Start a new conversation.
4. Invoke `/caveman-output`, then send the same prompt.
5. Compare whether the answer preserved cause, evidence, fix, and verification.

## Upstream installation (optional)

Current project instructions for skills-compatible agents:

```bash
npx skills add JuliusBrussee/caveman --skill '*' -a cursor --yes
```

Verify the command again before the workshop. Do not install globally without participant or organization approval.

## Debrief

- The Caveman skill primarily reduces **agent output**. The skill itself consumes part of the input context.
- On short tasks, it may not reduce the cost of the complete session.
- Code, commands, identifiers, and errors must remain exact; style must not destroy diagnostic information.

Source: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman).
