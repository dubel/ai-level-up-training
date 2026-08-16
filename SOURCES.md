# Źródła i zastrzeżenia

Stan materiałów: **16 sierpnia 2026**. Cursor, RTK, Context7 i ekosystem skills zmieniają się szybko; przed szkoleniem warto ponownie sprawdzić komendy instalacyjne.

## Cursor

- [Rules](https://docs.cursor.com/context/rules-for-ai) — `.cursor/rules`, typy reguł i `AGENTS.md`.
- [Best practices for coding with agents](https://cursor.com/blog/agent-best-practices) — Plan Mode, zarządzanie kontekstem, rules, skills, hooks, review i worktrees.
- [Model Context Protocol](https://docs.cursor.com/context/model-context-protocol) — `.cursor/mcp.json`, transporty i approval dla narzędzi.
- [Cursor 2.4: Subagents, Skills, and Image Generation](https://cursor.com/changelog/2-4) — `SKILL.md` i dynamiczne ładowanie skills.

## Optymalizacja kontekstu i kodu

- [RTK — Rust Token Killer](https://github.com/rtk-ai/rtk) — instalacja dla Cursora: `rtk init -g --agent cursor`. Deklarowane oszczędności dotyczą outputu komend shell, nie całego rachunku za model.
- [Caveman](https://github.com/JuliusBrussee/caveman) — skill skracający odpowiedzi agenta; pełny projekt ma też opcjonalne mechanizmy redukcji inputu.
- [Ponytail](https://github.com/DietrichGebert/ponytail) — podejście YAGNI/Occam ograniczające ilość budowanego kodu; dla Cursora dostępna jest reguła projektowa.

## MCP, bezpieczeństwo i spec-driven

- [Context7 MCP — konfiguracja klientów](https://context7.com/docs/resources/all-clients) — zdalny endpoint `https://mcp.context7.com/mcp`.
- [OWASP LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — indirect injection, least privilege, walidacja wejścia/wyjścia i human-in-the-loop.
- [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) — ryzyka i granice autoryzacji MCP.
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) — inspiracja dla sekwencji spec → dev → self-check → adversarial review. Demo bazuje na lokalnym wariancie `bmad-quick-flow` dostępnym w czasie przygotowania materiałów.
- [Steve Yegge — Gas Town](https://yegge.ai/gastown) — inspiracja dla krańca osi adopcji: koordynacja wielu agentów i trwała pamięć pracy. Slajdy używają własnej, praktycznej drabiny warsztatowej, a nie literalnej klasyfikacji autora.
- [DORA: Impact of Generative AI in Software Development](https://dora.dev/ai/gen-ai-report/report/) — powód, by mierzyć wynik zespołu, jakość i stabilność, a nie tylko liczbę wygenerowanych linii.

## Materiał wejściowy

Do zaprojektowania narracji wykorzystano `../ai_enablement_speed_run.pptx`, w szczególności: pięciostopniowy model dojrzałości, rozróżnienie prompt/agent/spec-driven, pomiar DORA oraz wprowadzenie RTK, Caveman i BMAD. Nowa prezentacja jest napisana od zera po polsku i używa własnego systemu wizualnego.

