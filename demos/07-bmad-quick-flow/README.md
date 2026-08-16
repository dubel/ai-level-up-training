# Demo 07 — BMAD Quick Flow w wersji warsztatowej

To małe repo demonstruje rdzeń lokalnego BMAD Quick Flow:

```text
understand → investigate → implementation-ready spec → quick dev → self-check → adversarial review
```

Nie jest to pełna instalacja BMAD. Dwa lokalne skills zachowują najważniejsze bramki jakości i mieszczą demo w 30 minutach.

## Przygotowanie

```bash
node --test
```

Przeczytaj `request.md`, ale nie rozwiązuj zadania ręcznie.

## Faza 1 — spec w Plan Mode (12 min)

W Cursorze uruchom:

```text
/bmad-quick-spec request.md
```

Agent powinien:

1. zdefiniować delta i scope,
2. przeczytać `project-context.md`, kod i testy,
3. wskazać konkretne pliki i wzorce,
4. zapisać spec z zadaniami oraz Given/When/Then,
5. zatrzymać się przed kodowaniem.

Porównaj wynik z `docs/example-tech-spec.md`. Nie kopiuj przykładu do kontekstu przed wygenerowaniem własnej specyfikacji.

## Faza 2 — świeży kontekst i implementacja (12 min)

Zaakceptuj spec, rozpocznij **nową rozmowę** i uruchom:

```text
/bmad-quick-dev docs/generated/tech-spec-blackout-windows.md
```

Jeśli live spec ma inną nazwę, użyj jej ścieżki.

Agent ma wykonać całość bez checkpointu między małymi taskami, ale zatrzymać się po trzech powtarzających się porażkach, niejasności domenowej lub odkryciu ryzykownej operacji.

## Faza 3 — review (6 min)

- Otwórz diff, nie podsumowanie.
- Sprawdź każde AC.
- Poproś świeży kontekst o adversarial review.
- Uczestnik wybiera: napraw / odrzuć jako noise / odłóż z uzasadnieniem.

## Dlaczego świeża rozmowa?

Spec ma być samowystarczalnym kontraktem. Agent implementujący nie powinien korzystać z niejawnych ustaleń ukrytych w długiej historii rozmowy.

