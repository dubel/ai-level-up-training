# Request: blackout windows

Zespół operacyjny potrzebuje czasowych blokad wdrożeń produkcyjnych.

Wymagania:

- `evaluateWindow` przyjmuje opcjonalne `blackoutWindows: [{ from, to, reason }]`.
- Zakres obejmuje obie granice i używa dat UTC `YYYY-MM-DD`.
- W produkcji data mieszcząca się w dowolnym oknie zwraca `{ allowed: false, reason: <reason> }`.
- Poza produkcją blackout nie blokuje wdrożenia.
- Brak blackoutów zachowuje dotychczasowe zachowanie.
- Zakres `from > to` jest błędem wejścia.

Poza zakresem: strefy lokalne, cykliczne okna, święta, persistence, UI i pobieranie zmian z API.

