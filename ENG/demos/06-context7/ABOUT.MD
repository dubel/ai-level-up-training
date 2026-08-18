# About this demo

## Quick orientation

This project is a documentation-retrieval exercise rather than a complete application. It asks the agent to design a Playwright session-expiry test first from model memory and then from version-specific documentation retrieved through the read-only Context7 MCP server.

## Code at a glance

`package.json` is the version anchor:

```json
{
  "devDependencies": {
    "@playwright/test": "1.55.0"
  }
}
```

The desired test must control the browser clock instead of sleeping:

```text
active session -> install/control page clock -> advance 10 minutes
-> assert "Session expired"
```

No application or test implementation is included because the learning objective is selecting and verifying an API, not making a synthetic test pass.

## Deep dive

- `task.md` defines the required behavior and forbids `waitForTimeout`, manual `Date.now` mocks, and new dependencies.
- `package.json` prevents the agent from silently answering for a different Playwright version.
- `.cursor/mcp.json.example` contains the remote Context7 endpoint and must be copied to `.cursor/mcp.json` only for a live integration.
- `comparison-sheet.md` records library version, proposed API, call order, documentation evidence, assumptions, confidence, and tool-call count.

Run the task in two fresh conversations. The first response must disclose uncertainty. The second should resolve the exact library, retrieve matching documentation, cite the relevant section, and separate retrieved facts from inference.

## Expected exercise result

Participants should complete `comparison-sheet.md` and be able to say whether retrieval changed the proposed implementation or merely increased confidence. The Context7 run should be tied to Playwright `1.55.0`, name the clock API and call order supported by retrieved documentation, and list assumptions about how the application detects expiry.

No `npm install`, application startup, or passing test is required for the core exercise.

## Troubleshooting and fallback

| Problem | Likely cause | Action / fallback |
|---|---|---|
| Context7 does not connect | Network access, MCP policy, or server availability | Stop after three minutes. Inspect `.cursor/mcp.json.example` and complete the comparison using prepared or official documentation. |
| MCP tools do not appear | Configuration was not copied or Cursor needs a restart | Verify the config path and server name. If still unavailable, use the no-tool run plus `comparison-sheet.md`. |
| The agent answers for the latest Playwright | It ignored the project version | Restate that `package.json` is the source of truth and require evidence for version `1.55.0`. |
| The agent invents an application fixture | The repository intentionally has no app implementation | Ask for a short API sketch plus explicit application assumptions, not executable code. |
| Tool calls run automatically | Auto-run or broad approval is enabled | Disable auto-run and review each tool name and argument. This demo should remain read-only. |
| Retrieval returns an indirect instruction | External content is untrusted | Do not follow it. Treat retrieved text as data and continue only with the safe documentation task. |

**Trainer fallback:** show the MCP configuration, use the comparison sheet, and discuss what evidence would be required before accepting the API. A live network call is optional.
