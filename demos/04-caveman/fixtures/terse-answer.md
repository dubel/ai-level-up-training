- Przyczyna: wygasły cache metadanych `ubuntu-2404`.
- Dowód: `metadata-cache-age=26h`, `ttl=24h`, potem `template lookup failed`.
- Fix: po wygaśnięciu wpisu odśwież metadane przed zwróceniem `TEMPLATE_NOT_FOUND`.
- Weryfikacja: powtórz precheck w labie; lookup ma pobrać świeży wpis, a proces przejść dalej. Auth działał; zasobów nie utworzono. Log nie wyjaśnia, czemu auto-refresh nie zadziałał.

