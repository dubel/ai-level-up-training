# Demo 04 — Caveman: krótsza odpowiedź agenta

Cel: pokazać różnicę między techniczną kompletnością a werbalnym nadmiarem.

## Demo bez instalacji

```bash
node scripts/measure.mjs
```

Porównaj dwa zapisane warianty odpowiedzi. Następnie w Cursorze:

1. Wklej prompt z `prompt.md` bez skilla.
2. Zapisz odpowiedź do `scratch/normal.md` (katalog jest celowo nieobecny — agent może go utworzyć).
3. Rozpocznij nową rozmowę.
4. Wywołaj `/caveman-output`, potem ten sam prompt.
5. Porównaj: czy zachowano przyczynę, dowód, fix i verification?

## Instalacja upstream (opcjonalnie)

Aktualna instrukcja projektu dla skills-compatible agents:

```bash
npx skills add JuliusBrussee/caveman --skill '*' -a cursor --yes
```

Komendę sprawdź ponownie przed szkoleniem. Nie instaluj globalnie bez zgody uczestnika/organizacji.

## Debrief

- Caveman skill redukuje głównie **output agenta**. Sam skill zajmuje część input context.
- Na krótkich zadaniach może nie dać oszczędności całej sesji.
- Kod, komendy, nazwy i błędy muszą pozostać dosłowne — styl nie może niszczyć diagnostyki.

Źródło: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman).

