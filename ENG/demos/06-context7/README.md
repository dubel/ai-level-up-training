# Demo 06 — Context7: model memory vs current documentation

Goal: present MCP as controlled access to current, versioned documentation, not as a “magic booster” for every prompt.

## Without installation

Read `task.md` and run the first prompt:

```text
Work without external tools first. Based on package.json, propose an implementation for task.md. Name the API you would use and your confidence level. Do not edit files.
```

Record the API and version claims in `comparison-sheet.md`.

## Configure Context7 in Cursor

1. Open MCP settings in Cursor or copy `.cursor/mcp.json.example` to `.cursor/mcp.json`.
2. Verify the server name, endpoint, and tool scope before enabling it.
3. Keep approval enabled for tool calls. Do not enable auto-run for the demo.
4. Start a new conversation and enter:

```text
Use Context7. Resolve the exact Playwright library and verify the API against the version in package.json. Then propose the smallest implementation for task.md. Cite the retrieved documentation sections. Do not edit files.
```

## What to compare

- Did the agent confirm the correct library and version?
- Did it name methods and call order supported by the docs?
- Did it distinguish retrieved facts from its own inferences?
- How many tool calls did it make, and were all of them necessary?

## Caveats

- Context7 does not replace internal documentation or tests.
- Retrieval can return a version different from the project; anchor every request in `package.json` or the lockfile.
- This is a read-only MCP. Private data or operations require a separate threat model.

Sources: [Context7 clients](https://context7.com/docs/resources/all-clients), [Cursor MCP](https://docs.cursor.com/context/model-context-protocol).
