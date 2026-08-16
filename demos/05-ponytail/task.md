# Task: weekend freeze

Rozszerz `isDeploymentAllowed`:

- w `production` wdrożenie w sobotę lub niedzielę jest zablokowane,
- w `staging` i `development` weekend nie zmienia decyzji,
- parametr `at` jest instancją `Date`,
- istniejący publiczny wynik boolean pozostaje bez zmian,
- dodaj test soboty, niedzieli i dnia roboczego.

Poza zakresem: święta, strefy czasowe użytkownika, konfiguracja z pliku, panel administracyjny i przyszłe polityki.

