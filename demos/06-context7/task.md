# Task: test wygaśnięcia sesji bez czekania

Zaproponuj minimalny test Playwright, który:

- otwiera dashboard z aktywną sesją,
- przejmuje kontrolę nad zegarem strony przy użyciu API dostępnego w wersji z `package.json`,
- przesuwa czas o 10 minut bez realnego oczekiwania,
- potwierdza pokazanie komunikatu `Session expired`,
- nie używa `waitForTimeout`, ręcznych mocków `Date.now` ani nowej zależności.

Na tym etapie nie implementuj testu. Potrzebujemy zweryfikowanego API, krótkiego szkicu kodu i listy założeń o aplikacji.

