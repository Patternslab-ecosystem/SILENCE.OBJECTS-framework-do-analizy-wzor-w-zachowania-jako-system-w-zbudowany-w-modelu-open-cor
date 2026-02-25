# 🤫 SILENCE.OBJECTS

> **Open‑Core Framework for Structural Behavioral Pattern Analysis (Non‑Clinical).**
> *Redesign the day, not the human.*

SILENCE.OBJECTS to publiczne, open‑core repozytorium badawcze dla zespołów, które chcą pracować ze **wzorcami zachowania** w sposób strukturalny, powtarzalny i zgodny z regulacjami – bez wchodzenia w obszar diagnozy medycznej lub terapeutycznej.

---

## 🎨 First contact: a sterile cockpit, not a wellness app

Kiedy otwierasz referencyjnego klienta **PatternLens**, nie widzisz kolorowych wykresów. Wchodzisz do ciemnej, cichej **analytical bay** – bardziej jak konsola laboratoryjna niż „apka do samopoczucia”. Tylko jedno ma prawo świecić: wykryty wzorzec.

* **Void background** – OLED‑friendly near‑black (`#05060A`), aby układ nerwowy miał spokój.
* **Single accent** – `Neural Blue` (`#32B8C6`) lub `S11 Emerald` (`#1DBF8F`) – sygnał w ciemności.
* **Monospace headings** – interfejs czyta się jak instrument badawczy, nie feed społecznościowy.
* **Asymmetry by design** – ok. 38% ekranu to „signal”, 62% to „silence” (Złoty Podział).

Ten motyw wizualny jest częścią założenia badawczego: **interfejs ma wzmacniać zdolność do dostrzegania struktur, a nie generować kolejne szumy.**

---

## 🏛 Overview & Use Cases

SILENCE.OBJECTS to monorepozytorium frameworka do modelowania obiektów behawioralnych i analizy 4-fazowej.

- **PatternLens (B2C client)** – PWA do wychwytywania wzorców na poziomie jednostki.
- **PatternsLab (B2B dashboard)** – wielotenantowy kokpit dla organizacji i zespołów.
- **Portal (governance)** – warstwa audytu, compliance i artefaktów EU AI Act.

---

## 🚀 Repository Structure & Package Map

Szczegółowa mapa monorepo, pakietów i ich roli znajduje się w: **[docs/architecture/03-packages-map.md](docs/architecture/03-packages-map.md)**.

```txt
apps/             # Referencyjne aplikacje (PatternLens, PatternsLab, Portal)
packages/@silence/ # Open Core (SDK, Contracts, Core, UI, Behavioral Modules)
ee/               # Moduły Enterprise (behavioral-engine, safety, compliance)
docs/             # Architektura (S11 Manifesto, 00-Abstract), Compliance
prisma/           # Open-core behavioral data model (schema.prisma)
src/              # Wspólne helpery runtime / konfiguracja globalna
```

### Key Open-Core Packages:
* **@silence/contracts**: Typy TS i schematy Zod dla Obiektów i Zdarzeń.
* **@silence/core**: Silnik analizy 4-fazowej (Context -> Tension -> Meaning -> Function).
* **@silence/behavioral-sequences**: Analiza n-gramów i sekwencji zdarzeń.
* **@silence/sdk**: Fasada i jedyny punkt wejścia dla aplikacji.

---

## 🛠 Tech Stack
- **Monorepo**: Turborepo + pnpm
- **Frontend / UI**: Next.js 14, React, Tailwind CSS
- **Backend / ORM**: Prisma (PostgreSQL / PostgresJS)
- **Validation**: Zod (contract‑first)

## 🏗 Getting Started
```bash
pnpm install
pnpm dev --filter apps/patternlens
pnpm dev --filter apps/patternslab
pnpm dev --filter apps/portal
```

## 📜 Licensing
Framework SILENCE.OBJECTS jest zbudowany w modelu open‑core:
- **Packages** (`packages/**`, @silence/*): **MIT License** (Open Core).
- **Enterprise** (`ee/**`): **Proprietary**.
- **Applications** (`apps/*`): **Proprietary**.

Dokładny abstrakt naukowy projektu: **[docs/architecture/00-abstract.md](docs/architecture/00-abstract.md)**.

---
*Developed by Patternslab Ecosystem. S11 Standard Compliant. Research‑grade, non‑clinical by design.*
