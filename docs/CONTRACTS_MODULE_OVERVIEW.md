# @silence/contracts — Overview

Wersja: 1.0  
Rola: centralny kontrakt typów i eventów (Single Source of Truth) dla całego ekosystemu SILENCE.OBJECTS.[file:1480]

## Cel modułu

- Definiuje **wspólne typy** (TypeScript) dla:
  - Objectów, eventów, profili uwagi, metryk itd.
- Jest jedynym miejscem, z którego:
  - importują typy zarówno aplikacje (`apps/*`), jak i moduły open‑core oraz Engine (`ee/*`).[file:1480]
- Nie zawiera żadnej logiki biznesowej, tylko **kontrakty**:
  - interfejsy, enumy, aliasy typów.

## Struktura pakietu

`packages/@silence/contracts/`

- `src/index.ts` – publiczny eksport wszystkich typów.
- `src/events.ts` – definicje eventów (np. `BehavioralEvent`, `WearableEvent`, `ConsentEvent`).
- `src/objects.ts` – struktura Objectów (wejście do PatternLens / PatternsLab).
- `src/profiles.ts` – profile uwagi, ustawienia UI.
- `src/metrics.ts` – podstawowe typy metryk / sygnałów.[file:1480]

## Zasady użycia

- Wszystkie inne pakiety:
  - zależą od `@silence/contracts` przez `"@silence/contracts": "workspace:*"`.
- **Zakaz** duplikowania typów w innych pakietach:
  - jeśli potrzebujesz nowego typu → dopisz go tutaj i wydaj nową wersję.[file:1480]
- Moduł nie może wprowadzać języka sprzecznego z S11:
  - nazwy typów i pól muszą być strukturalne (pattern, cycle, tension, attentionProfile), bez terminologii klinicznej.[file:1479]

## Minimalny kod startowy (index.ts)

```ts
// packages/@silence/contracts/src/index.ts

export * from "./objects";
export * from "./events";
export * from "./profiles";
export * from "./metrics";
