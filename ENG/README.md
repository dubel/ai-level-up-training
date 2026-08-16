# AI Level Up — Cursor workshop

A complete package for running a six-hour workshop for development, DevOps, and QA automation teams. The material takes participants from a single prompt to a safe, repeatable agent workflow operating on a real repository.

## What is included

- `presentation/` — an offline HTML presentation with 39 slides, keyboard controls, and overview mode.
- `demos/` — eight independent labs, each opened as a separate folder in Cursor.
- `participant-agenda.md` — a short agenda to send to participants.
- `trainer_script.md` — the complete facilitator script; the file exists locally but is ignored by Git as requested.
- `SOURCES.md` — sources and important caveats for fast-moving tools.

## Quick start

Run from this `ENG` directory:

```bash
npm run serve
```

Then open `http://localhost:4173/presentation/`.

Presentation controls:

- `→`, `Space`, `PageDown` — next slide
- `←`, `PageUp` — previous slide
- `Home` / `End` — first / last slide
- `O` — overview of all slides
- `F` — full screen
- `?` — help

## Verification

```bash
npm test
```

The tests use only Node.js and built-in libraries. The RTK, Context7, Caveman, and Ponytail demos all have installation-free paths. Full integrations are optional and documented step by step in each demo README.

## How to run the workshop

1. Send `participant-agenda.md` to participants and ask them to bring an up-to-date Cursor installation and access to a repository where they can experiment safely.
2. Complete the checklist in `trainer_script.md` before the session.
3. Run the presentation locally.
4. Open every demo in a separate Cursor window so its rules, skills, and MCP configuration cannot leak into other exercises.

All participant-facing materials and Cursor prompts in this folder are in English.
