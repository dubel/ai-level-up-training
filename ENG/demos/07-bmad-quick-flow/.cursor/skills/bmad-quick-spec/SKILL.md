---
name: bmad-quick-spec
description: Turn a small, well-understood change request into a self-contained implementation-ready technical specification before coding.
---

# BMAD Quick Spec — workshop edition

Do not implement code.

## Ready-for-development standard

The spec is ready only when it is actionable, dependency-ordered, testable, complete and self-contained for a fresh agent.

## Workflow

1. **Understand** — read the request; capture title, problem, solution, in scope and out of scope. Ask only questions that materially change the implementation.
2. **Investigate** — read `project-context.md`, relevant production files and nearest tests. Capture stack, patterns, exact files and test commands. Do not guess filenames.
3. **Generate** — write dependency-ordered tasks. Every task names a file and exact action. Write acceptance criteria in Given/When/Then form covering happy path, boundary and invalid input.
4. **Review** — check that no TBD or hidden workflow-history dependency remains. Present the complete spec for approval.
5. Save to `docs/generated/tech-spec-<slug>.md` with status `ready-for-dev` only after approval.
6. Stop. Recommend implementing from the saved spec in a fresh conversation using `/bmad-quick-dev <path>`.

