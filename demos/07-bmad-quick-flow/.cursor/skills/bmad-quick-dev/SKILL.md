---
name: bmad-quick-dev
description: Implement an approved technical specification end-to-end, verify every acceptance criterion, and prepare an adversarial review.
---

# BMAD Quick Dev — workshop edition

Input must be a path to an approved tech spec.

1. Capture the current git baseline without staging or discarding user changes.
2. Read the complete spec, `project-context.md`, and only the files required by the next task.
3. Execute all tasks in dependency order. After each task, run the narrowest relevant test and mark it complete in the spec.
4. Do not stop between routine tasks. HALT after three failures on the same step, a failing test with unclear cause, missing dependency, destructive operation or a domain decision not covered by the spec.
5. Run the full test command from project context.
6. Self-check: all tasks complete, tests pass, every AC has evidence, project patterns preserved, no speculative additions.
7. Construct a diff from the captured baseline. Request an adversarial review in fresh context and return every finding with severity and validity.
8. Do not auto-fix uncertain/noise findings. Ask the user to choose walk-through, fix valid findings, or acknowledge and stop.
9. Report files changed, tests run, AC evidence and unresolved risk.

