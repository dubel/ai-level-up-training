# Prompt do przebiegu B

Najpierw pracuj w Plan Mode. Nie edytuj plików.

Cel: zaimplementować wymaganie z `@task.md` w istniejącej bramce wdrożeniowej.

Kontekst:

- Przeczytaj `@src/deploymentGate.mjs` i `@test/deploymentGate.test.mjs`.
- Dołącz regułę `@project-context`.
- Znajdź istniejący sposób walidacji i zwracania powodów.

Ograniczenia:

- Zachowaj publiczny wynik `{ allowed, reason }`.
- Nie dodawaj zależności ani nowych abstrakcji.
- Nie rozszerzaj zadania poza `changeRisk`.

Kryteria akceptacji są w `@task.md`. Plan ma wskazać dokładne pliki, przypadki testowe i kolejność zmian. Po implementacji agent ma uruchomić najwęższy test, potem `node --test`, oraz pokazać diff i niepewności.

