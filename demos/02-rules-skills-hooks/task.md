# Zadanie dla test planu

Do `retryPolicy` ma dojść obsługa kodu `RATE_LIMITED`.

- Pierwsza próba: 500 ms.
- Każda kolejna: dwukrotnie dłuższa.
- Maksymalnie 4 próby.
- `AUTH_FAILED` nadal nie może być retryable.
- Publiczny wynik funkcji pozostaje bez zmian.

