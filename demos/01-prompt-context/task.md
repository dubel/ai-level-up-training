# Task: change risk w bramce wdrożeniowej

Operatorzy potrzebują zatrzymać wdrożenie produkcyjne o wysokim ryzyku, dopóki architekt nie zaakceptuje zmiany.

Kryteria biznesowe:

- `low` i `medium` nie wymagają dodatkowej akceptacji.
- `high` w `production` wymaga `architectureApproved: true`.
- `high` poza produkcją zachowuje dotychczasowe zasady.
- Brak lub nieznana wartość `changeRisk` ma zwrócić czytelny błąd wejścia.
- Publiczny kształt wyniku `{ allowed, reason }` nie może się zmienić.

Poza zakresem: nowe klasy, biblioteki, logowanie, persistence i zmiany w pipeline.

