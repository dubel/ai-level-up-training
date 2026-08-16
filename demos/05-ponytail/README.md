# Demo 05 — Ponytail: najmniej kodu, które działa

Ponytail stosuje YAGNI i „drabinę prostoty”: najpierw nic, potem konfiguracja, istniejąca funkcja, mały warunek, dopiero na końcu nowa abstrakcja.

## Szybkie demo deterministyczne

```bash
node scripts/measure.mjs
node --test
```

`examples/overengineered-candidate.mjs` i `examples/minimal-candidate.mjs` realizują ten sam mały warunek. Porównanie nie dowodzi jakości — otwiera rozmowę o koszcie utrzymania.

## Demo w Cursorze

1. Poproś agenta: `Zaplanuj implementację task.md. Nie zmieniaj plików.`
2. Zapisz plan i policz nowe typy, pliki, konfiguracje oraz rozszerzalność „na przyszłość”.
3. Rozpocznij nową rozmowę i uruchom `/ponytail-review` na tym planie.
4. Dopiero potem poproś o minimalny plan spełniający wszystkie kryteria.

## Upstream w Cursorze

Projekt Ponytail dostarcza dla Cursora plik w `.cursor/rules/`. Demo używa lokalnego, ręcznie wywoływanego skilla review, żeby efekt był kontrolowany i nie wpływał na pozostałe ćwiczenia.

Źródło: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail).

