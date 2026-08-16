# Sources and caveats

Material status: **August 16, 2026**. Cursor, RTK, Context7, and the skills ecosystem change quickly; verify installation commands again before the workshop.

## Cursor

- [Rules](https://docs.cursor.com/context/rules-for-ai) — `.cursor/rules`, rule types, and `AGENTS.md`.
- [Best practices for coding with agents](https://cursor.com/blog/agent-best-practices) — Plan Mode, context management, rules, skills, hooks, review, and worktrees.
- [Model Context Protocol](https://docs.cursor.com/context/model-context-protocol) — `.cursor/mcp.json`, transports, and tool approvals.
- [Cursor 2.4: Subagents, Skills, and Image Generation](https://cursor.com/changelog/2-4) — `SKILL.md` and dynamic skill loading.

## Context and code optimization

- [RTK — Rust Token Killer](https://github.com/rtk-ai/rtk) — Cursor installation: `rtk init -g --agent cursor`. Reported savings concern shell-command output, not the complete model bill.
- [Caveman](https://github.com/JuliusBrussee/caveman) — a skill that shortens agent responses; the full project also provides optional input-reduction mechanisms.
- [Ponytail](https://github.com/DietrichGebert/ponytail) — a YAGNI/Occam approach that limits the amount of code built; a project rule is available for Cursor.

## MCP, security, and spec-driven development

- [Context7 MCP — client configuration](https://context7.com/docs/resources/all-clients) — remote endpoint `https://mcp.context7.com/mcp`.
- [OWASP LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — indirect injection, least privilege, input/output validation, and human-in-the-loop controls.
- [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — MCP risks and authorization boundaries.
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) — inspiration for the sequence spec → dev → self-check → adversarial review. The demo is based on the local `bmad-quick-flow` variant available while these materials were prepared.
- [Steve Yegge — Gas Town](https://yegge.ai/gastown) — inspiration for the far end of the adoption axis: multi-agent coordination and durable work memory. The slides use a practical workshop ladder, not Yegge's literal classification.
- [DORA: Impact of Generative AI in Software Development](https://dora.dev/ai/gen-ai-report/report/) — rationale for measuring team outcomes, quality, and stability instead of generated lines of code.

## Source material

The narrative design used `../../ai_enablement_speed_run.pptx`, especially its five-stage maturity model, prompt/agent/spec-driven distinction, DORA measurement, and introduction to RTK, Caveman, and BMAD. This presentation was rewritten from scratch and uses its own visual system.
