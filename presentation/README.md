# Prezentacja HTML

Deck działa bez internetu i bez zewnętrznych bibliotek.

## Uruchomienie

Z katalogu głównego:

```bash
npm run serve
```

Otwórz `http://localhost:4173/presentation/` i naciśnij `F`, aby wejść w pełny ekran.

Można też otworzyć `index.html` bezpośrednio, ale lokalny serwer daje bardziej przewidywalne zachowanie modułu JavaScript i linków.

## Nawigacja

- strzałki / PageUp / PageDown / Space,
- `O` — overview,
- `F` — fullscreen,
- `?` — skrót pomocy,
- hash `#/17` — bezpośrednie wejście na slajd 17.

## PDF

Użyj systemowej funkcji drukowania przeglądarki. Arkusz ma `@media print` z formatem 16:9 i jednym slajdem na stronę. Włącz drukowanie grafik tła.

## Źródła

Źródła istotnych twierdzeń są zapisane na slajdach oraz w `../SOURCES.md`. Prezentacja nie pobiera zewnętrznych obrazów ani fontów.
