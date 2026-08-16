# Demo 02 — Rule vs Skill vs Hook

Cel: rozdzielić trzy odpowiedzialności w działającym projekcie Cursor.

## Co zobaczyć

- `.cursor/rules/team-conventions.mdc` — krótka wiedza stała i scoped do plików źródłowych/testów.
- `.cursor/skills/create-test-plan/SKILL.md` — procedura uruchamiana jako `/create-test-plan` lub dobierana przez agenta.
- `.cursor/hooks.json.example` + `.cursor/hooks/grind.mjs` — opcjonalna automatyczna pętla maksymalnie pięciu iteracji.

Hook jest celowo wyłączony. Nie kopiuj pliku do `hooks.json`, dopóki nie omówisz warunków stopu i limitu iteracji.

## Przebieg

1. Otwórz ten katalog jako osobny projekt w Cursorze.
2. Uruchom `node --test`.
3. Zapytaj: `Jakie instrukcje projektu są teraz aktywne i do jakich plików się odnoszą?`
4. Uruchom `/create-test-plan` dla `task.md`.
5. Sprawdź, czy agent najpierw czyta źródło i testy, zamiast od razu generować ogólną listę.
6. Otwórz `hooks.json.example` i omów: kiedy hook pomaga, kiedy zapętla koszt i dlaczego ma limit.

## Zadanie uczestników

Stwórzcie własny skill dla jednego procesu zespołu. Definicja „done”:

- jednoznaczny trigger w `description`,
- 5–9 kroków,
- wskazanie istniejących wzorców,
- komenda weryfikacji,
- co najmniej jeden warunek HALT / approval.

