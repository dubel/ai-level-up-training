# Demo 01 — prompt vs kontrakt

Cel: pokazać, że jakość delegowania rośnie dzięki kontekstowi, ograniczeniom i kryteriom akceptacji, a nie dzięki „magicznej” frazie.

## Przygotowanie

1. Otwórz **ten katalog** jako osobny projekt w Cursorze.
2. Uruchom `node --test` — testy startowe powinny przejść.
3. Otwórz `task.md`, `src/deploymentGate.mjs` i `test/deploymentGate.test.mjs`.

## Przebieg A — minimalny prompt

W Agent mode wpisz:

```text
Dodaj obsługę change risk do deployment gate. Najpierw tylko zaplanuj, nie zmieniaj plików.
```

Zapisz:

- jakie pytania zadał agent,
- jakie założenia przyjął sam,
- czy wskazał konkretne pliki i testy.

## Przebieg B — kontrakt

Rozpocznij nową rozmowę i wklej prompt z `prompts/contract.md`. Regułę dołącz ręcznie przez `@project-context`.

Porównaj plan A i B. Nie implementuj, dopóki plan nie wskazuje dokładnych zmian, testów i elementów poza zakresem.

## Opcjonalna implementacja

Po akceptacji planu:

```text
Zaimplementuj zatwierdzony plan. Uruchom najwęższe testy, potem cały node --test. Nie zmieniaj testów tylko po to, by przeszły. Na końcu pokaż diff i pozostałe ryzyka.
```

## Debrief

Dobry wynik to nie dłuższa odpowiedź. Dobry wynik to mniej niewidocznych decyzji podjętych przez model.

