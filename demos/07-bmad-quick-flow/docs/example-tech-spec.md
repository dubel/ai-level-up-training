---
title: Production blackout windows
slug: blackout-windows
status: ready-for-dev
stepsCompleted: [1, 2, 3, 4]
tech_stack: [Node.js, JavaScript ESM, node:test]
files_to_modify:
  - src/deploymentWindow.mjs
  - test/deploymentWindow.test.mjs
---

# Production blackout windows

## Problem

Brak możliwości czasowego zatrzymania wdrożeń produkcyjnych bez zmiany kodu wywołującego bramkę.

## Solution

Rozszerzyć wejście `evaluateWindow` o opcjonalną listę inkluzywnych zakresów dat i wykonać lokalne, czyste sprawdzenie przed istniejącą decyzją o gotowości.

## Scope

In scope: produkcyjne blokady UTC, stabilny reason, walidacja odwróconego zakresu, testy.  
Out of scope: cykliczność, strefy lokalne, persistence, API, UI, biblioteka dat.

## Context for development

- Zachować wynik `{ allowed, reason }`.
- Plik `src/deploymentWindow.mjs` używa early returns i stabilnych reason identifiers.
- Testy są w `test/deploymentWindow.test.mjs` i używają `node:test`.
- Data wejściowa `at` jest `Date`; zakresy są ISO date-only w UTC.

## Implementation tasks

- [ ] Task 1: Dodać mały helper walidujący i sprawdzający inkluzywny zakres UTC.
  - File: `src/deploymentWindow.mjs`
  - Action: porównać znormalizowane `YYYY-MM-DD`; rzucić `TypeError`, gdy `from > to`.
  - Notes: bez klasy i zależności; nie mutować wejścia.
- [ ] Task 2: Zablokować produkcję w pierwszym pasującym blackout window.
  - File: `src/deploymentWindow.mjs`
  - Action: przyjąć `blackoutWindows = []`; poza produkcją pominąć sprawdzenie; zwrócić reason z okna.
- [ ] Task 3: Dodać testy zachowania i regresji.
  - File: `test/deploymentWindow.test.mjs`
  - Action: pokryć środek zakresu, obie granice, staging, pustą listę i odwrócony zakres.

## Acceptance criteria

- [ ] AC1: Given production i data wewnątrz okna, when `evaluateWindow` działa, then zwraca denial z reason tego okna.
- [ ] AC2: Given data równa `from` lub `to`, when wykonywane jest sprawdzenie, then obie granice są zablokowane.
- [ ] AC3: Given staging i pasujące okno, when wykonywane jest sprawdzenie, then wynik zachowuje dotychczasową decyzję.
- [ ] AC4: Given brak okien, when wywołanie używa starego kontraktu, then dotychczasowe testy przechodzą bez zmian.
- [ ] AC5: Given zakres z `from > to`, when wejście jest walidowane, then funkcja rzuca `TypeError` nazywający błędny blackout range.

## Verification

```bash
node --test test/deploymentWindow.test.mjs
node --test
```

## Risks

- Porównanie musi być wykonane w UTC, aby lokalna strefa procesu nie przesuwała dnia.
- Nakładające się okna zwracają reason pierwszego pasującego elementu; kolejność listy pozostaje decyzją wywołującego.

