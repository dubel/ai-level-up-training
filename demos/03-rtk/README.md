# Demo 03 — RTK: mniej hałasu z terminala

RTK (Rust Token Killer) filtruje output popularnych komend, zanim agent otrzyma go jako kontekst. Nie zmienia kodu ani testów.

## Wersja bez instalacji

```bash
node scripts/compare-output.mjs
```

Skrypt uruchamia hałaśliwy, deterministyczny „CI log”. Jeśli `rtk` nie jest dostępny, zestawia go z krótką, oznaczoną symulacją. Wynik pokazuje linie, bajty i przybliżenie `bytes / 4` — tę samą prostą estymację, którą opisuje RTK.

## Pełne demo

Instalację wykonuj przed szkoleniem, nie na oczach uczestników:

```bash
brew install rtk
rtk --version
rtk init -g --agent cursor
```

Po restarcie Cursora agentowe komendy shell mogą być przepisywane przez hook. Ręczny przebieg:

```bash
node scripts/noisy-ci.mjs
rtk test node scripts/noisy-ci.mjs
rtk gain
```

W Agent mode użyj:

```text
Uruchom noisy-ci raz bez RTK i raz przez `rtk test`. Nie naprawiaj niczego. Porównaj liczbę linii, zachowany sygnał o błędzie i oszacowanie bytes/4.
```

## Ważne zastrzeżenia

- „60–90%” w opisie projektu dotyczy redukcji outputu komend shell, nie całego rachunku za sesję.
- Prompt, system instructions, reasoning, odpowiedź modelu i retry nadal kosztują.
- Skondensowany output może ukryć detal diagnostyczny. Przy błędzie odczytaj pełny log wskazany przez RTK lub uruchom komendę bez filtra.
- Hook Cursora jest konfiguracją użytkownika. Przed rolloutem uzgodnij go z security i platform team.

Źródło: [rtk-ai/rtk](https://github.com/rtk-ai/rtk).

