# AI Level Up — Cursor workshop

Kompletny zestaw do przeprowadzenia sześciogodzinnego warsztatu dla zespołów development, DevOps i QA automation. Materiał prowadzi od pojedynczego promptu do bezpiecznego, powtarzalnego workflow agenta pracującego na prawdziwym repozytorium.

## Co jest w środku

- `presentation/` — prezentacja HTML działająca offline, 39 slajdów, obsługa klawiatury i tryb overview.
- `demos/` — osiem niezależnych laboratoriów otwieranych jako osobne foldery w Cursorze.
- `participant-agenda.md` — krótka agenda do wysłania uczestnikom.
- `trainer_script.md` — pełny scenariusz prowadzącego; plik istnieje lokalnie, ale zgodnie z wymaganiem jest ignorowany przez Git.
- `SOURCES.md` — źródła i ważne zastrzeżenia dotyczące szybko zmieniających się narzędzi.

## Szybki start

W katalogu repozytorium uruchom:

```bash
npm run serve
```

Następnie otwórz `http://localhost:4173/presentation/`.

Sterowanie prezentacją:

- `→`, `Space`, `PageDown` — następny slajd
- `←`, `PageUp` — poprzedni slajd
- `Home` / `End` — początek / koniec
- `O` — overview wszystkich slajdów
- `F` — pełny ekran
- `?` — pomoc

## Weryfikacja

```bash
npm test
```

Testy używają wyłącznie Node.js i bibliotek wbudowanych. Dema RTK, Context7, Caveman i Ponytail mają ścieżki bez instalacji, a ich pełne integracje są opcjonalne i opisane krok po kroku w README poszczególnych katalogów.

## Jak prowadzić

1. Wyślij uczestnikom `participant-agenda.md` i poproś o aktualny Cursor oraz dostęp do repo, na którym mogą bezpiecznie eksperymentować.
2. Przed spotkaniem przejdź checklistę w `trainer_script.md`.
3. Uruchom prezentację lokalnie.
4. Każde demo otwieraj w osobnym oknie Cursora — dzięki temu reguły, skills i konfiguracja MCP nie przeciekają między ćwiczeniami.

Materiały są po polsku; prompty dla Cursora są po polsku lub po angielsku tam, gdzie wersja angielska jest bardziej przenośna między modelami.

