# Demo 06 — Context7: pamięć modelu vs bieżąca dokumentacja

Cel: pokazać MCP jako kontrolowany dostęp do aktualnych, wersjonowanych docs — nie jako „magiczny wzmacniacz” każdego promptu.

## Bez instalacji

Przeczytaj `task.md` i wykonaj pierwszy prompt:

```text
Najpierw bez narzędzi zewnętrznych. Na podstawie package.json zaproponuj implementację task.md. Podaj API, którego użyjesz, oraz poziom pewności. Nie edytuj plików.
```

W `comparison-sheet.md` zanotuj twierdzenia o API i wersji.

## Konfiguracja Context7 w Cursorze

1. Otwórz ustawienia MCP w Cursorze lub skopiuj `.cursor/mcp.json.example` do `.cursor/mcp.json`.
2. Sprawdź nazwę serwera, endpoint i zakres narzędzi przed włączeniem.
3. Pozostaw approval dla tool calls. Nie włączaj auto-run na potrzeby demo.
4. Rozpocznij nową rozmowę i wpisz:

```text
Use Context7. Resolve the exact Playwright library and verify the API against the version in package.json. Then propose the smallest implementation for task.md. Cite the retrieved documentation sections. Do not edit files.
```

## Co porównać

- Czy agent potwierdził właściwą bibliotekę i wersję?
- Czy podał nazwy metod i kolejność wywołań poparte docs?
- Czy wyraźnie oddzielił fakty z retrieval od własnych wniosków?
- Ile tool calls wykonał i czy wszystkie były potrzebne?

## Zastrzeżenia

- Context7 nie zastępuje dokumentacji wewnętrznej ani testów.
- Retrieval może zwrócić inną wersję niż projekt; zawsze kotwicz pytanie w `package.json` / lockfile.
- To read-only MCP. Dostęp do danych prywatnych lub operacji wymaga osobnego threat modelu.

Źródła: [Context7 clients](https://context7.com/docs/resources/all-clients), [Cursor MCP](https://docs.cursor.com/context/model-context-protocol).

