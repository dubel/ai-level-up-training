# Cursor labs

Each directory is an independent, small demo repository. Open it as a separate folder in Cursor so its rules, skills, hooks, and MCP configuration cannot affect other exercises.

| Demo | Topic | Time | Installation required |
|---|---|---:|---|
| `01-prompt-context` | the same task: prompt vs contract + rule | 20–30 min | no |
| `02-rules-skills-hooks` | rule vs skill vs hook | 30–40 min | no |
| `03-rtk` | terminal noise before/after | 10 min | RTK optional |
| `04-caveman` | shorter agent output | 8 min | no; upstream optional |
| `05-ponytail` | less code, fewer abstractions | 12 min | no; upstream optional |
| `06-context7` | model memory vs current docs | 15–20 min | Context7 for the full demo |
| `07-bmad-quick-flow` | spec → dev → tests → review | 30 min | no |
| `08-prompt-injection` | untrusted document and approval boundary | 10 min | no |

## Reset rule

Before the second run, revert only the changes made inside that demo by using Cursor's `Review changes` UI or a fresh copy of the directory. Do not reset the complete training repository.

## Shared facilitator shortcuts

- Ask for a **plan without edits** first.
- Show participants the files and commands the agent intends to use.
- Approve implementation only after reviewing the plan.
- Review the diff, not the agent's summary.
