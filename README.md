# 🔇 SILENCE.OBJECTS

**SILENCE.OBJECTS** is an open‑core framework for **structural behavioral analysis** – patterns, sequences, rhythms, attention – designed for privacy, neurodiversity, and EU‑grade compliance (GDPR + EU AI Act, limited‑risk).

It powers two main products:

- **PatternLens (B2C)** – a personal cockpit that helps you notice how you think, without judging you.
- **PatternsLab (B2B/B2R)** – a workspace for teams, organizations, and researchers to work with patterns at group level.

No diagnostics. No therapy. No performance scoring. Only **behavioral patterns and attention profiles**, expressed in neutral, structural language.

---

## 🧱 Core ideas

- **Open‑core by design**  
  Most building blocks live under `@silence/*` and are MIT‑licensed. Enterprise‑grade and high‑risk modules live in `ee/@silence/*`.

- **Behavioral, not clinical**  
  We talk about patterns, rhythms, tension, capacity, recovery – not disorders, diagnoses, or “fixing people”. A dedicated S11 language system enforces this across code, UI, and prompts.

- **Compliance‑by‑design**  
  From day one, the platform is built around GDPR, ePrivacy, and EU AI Act “limited‑risk” requirements: data minimisation, transparent consent, and clear separation from medical / HR decision systems.

- **Research‑driven roadmap**  
  Every major capability has a research module behind it (sequences, rhythms, interventions, capacity, attention profiles, relations). The code and the papers stay in sync.

---

## 🏗 Architecture at a glance

SILENCE.OBJECTS is a 5‑layer platform:

```text
Layer I   Infrastructure      (DB, K8s, Edge, CI/CD)
Layer II  AI & Integrations   (@silence/ai, voice, 3rd‑party models)
Layer III SILENCE KERNEL      (@silence/core + @silence/* modules)
Layer IV  Applications        (PatternLens, PatternsLab, Portal)
Layer V   External Actors     (users, orgs, researchers, devices)
```

Monorepo layout:

- `apps/`
    - `patternlens-b2c` – PatternLens PWA
    - `patternslab-b2b` – PatternsLab for orgs/research
    - `portal` – founders / admin / compliance cockpit
    - `ai-gateway`, `infra`, `orchestrator`, …
- `packages/@silence/*` (open‑core)
    - `contracts` – single source of truth for events & types
    - `events` – typed event bus
    - `behavioral-sequences` – sequence analysis (loops, n‑grams, transitions)
    - `rhythmic-patterns` – behavioral rhythms (stay/switch)
    - `cognitive-load` – non‑clinical cognitive load signals (self‑report + behavior)
    - `capacity-recovery` – autonomy/competence/engagement indices
    - `attention-profiles` – adaptive attention/interaction profiles (UI only, no diagnosis)
    - `language` – S11 language guardrails
    - `validator` – contracts + language + safety checks in CI
    - `ui` – design system
    - `sdk` – the only public kernel interface
    - `ema`, `consent`, `cff` (planned)
- `ee/@silence/*` (closed / enterprise)
    - `ai`, `voice`, `predictive-core`, `predictive-human-factors`, `safety`,
`medical`, `legal`, `advanced-analytics`, `advanced-safety`,
`cognitive-load-pro`, `staircase`, `audit`, …

Applications only import from `@silence/sdk`, `@silence/ui` and shared utils. Everything else in the kernel is internal and can evolve without breaking apps.

---

## 📦 Scope of this repository

### Public part of SILENCE.OBJECTS

This public repository contains:

- **Open‑core packages (`@silence/*`)** – all modules necessary to work with behavioral data in a safe and regulation‑compliant way (see full list below).
- **Reference application PatternLens (`apps/patternlens`)** – a practical example of how to use the framework (B2C, voice‑first, offline‑first).
- **Complete contract and policy documentation**:
    - `00-CONTRACT.md` – defines the Object, the 4‑phase analysis, and strictly separates analysis from diagnosis.
    - `01-LANGUAGE.md` and S11 – language sterility system (no clinical terms, structural language only).
    - `02-SAFETY.md`, `02/03-AI-CONTRACT.md`, `03-RUNTIME-MODES.md` – safety contracts and AI runtime modes.
    - `04-MONETIZATION.md`, `04-PRODUCT-RULES.md` – open monetization principles (without billing implementation).
    - `05-PATTERNSLAB-PROFILE.md` – profile of the PatternsLab research layer.

### What's NOT in this repository (enterprise modules)

The following enterprise modules are **not** included – they live in a separate private control plane and are available only under commercial terms:

- `@silence/ee-behavioral-engine`, `@silence/ee-ai`, `@silence/ee-predictive`, `@silence/ee-intervention-timing`
- `@silence/ee-safety`, `@silence/ee-medical`, `@silence/ee-legal`, `@silence/ee-audit`
- `@silence/ee-analytics-dashboard`, `@silence/ee-billing`, `@silence/ee-orchestrator`, `@silence/ee-linkedin-agent`
- Portal and PatternsLab production versions, environment configurations, and full RLS policies.

All the above are described in the documentation, but their implementation remains closed and accessible only in the enterprise model.

---

## 🧩 Open‑core packages (`@silence/*`) – MIT

| Package | Description |
|---------|-------------|
| `@silence/contracts` | Central type contracts: Object, events, profiles, metrics. |
| `@silence/events` | Typed event bus, compatible with Redis Streams / CloudEvents. |
| `@silence/behavioral-sequences` | Behavior sequence analysis (n‑grams, transitions, rhythms). |
| `@silence/rhythmic-patterns` | Attention rhythms as behavioral proxies, no medical signals. |
| `@silence/cognitive-load` | Cognitive load from NASA‑TLX + non‑specific behavioral indicators. |
| `@silence/capacity-recovery` | "Capacity" profiles (autonomy/competence/engagement) as self‑tracking, not clinical. |
| `@silence/attention-profiles` | Adaptive attention profiles for UI customization (adaptive UI, not a diagnostic tool). |
| `@silence/language` | S11 language guardrails (forbidden vocabulary, mappings, enforcement). |
| `@silence/validator` | Validation of contracts, events, and config + S11 in CI. |
| `@silence/ui` | Design system for PatternLens, PatternsLab, and Portal. |

### Reference B2C application – PatternLens (`apps/patternlens`)

- Object input (50–5000 characters)
- 4‑phase analysis (Context, Tension, Meaning, Function)
- Confidence scores + alternative interpretations
- Interpretation archive, export, basic paywalls (FREE / PRO) at UX level

### Contracts and operational policies (documentation)

- `00-CONTRACT.md` – framework contract: Object, 4 phases, no diagnosis, no recommendations.
- `01-LANGUAGE.md` + S11 – language sterility system (limited‑risk AI, no clinical language).
- `02-SAFETY.md`, `02-AI-CONTRACT.md`, `03-AI-CONTRACT.md`, `03-RUNTIME-MODES.md` – safety contracts, runtime modes, and AI responsibility boundaries.
- `04-MONETIZATION.md`, `04-PRODUCT-RULES.md` – open monetization principles (FREE / PRO / ENTERPRISE model), without billing implementation.
- `05-PATTERNSLAB-PROFILE.md` – PatternsLab profile as research / B2B layer.

This repo can be cloned, forked, and used as an **open‑core foundation** for your own product and research projects.

---

## 🔒 Open‑core model: how to use this

This project is designed so that:

- **Individuals and dev/research teams**:
    - can use open‑core packages (`@silence/*`) and the reference PatternLens app as a starting point for their own tools,
    - have clear contracts (`00-CONTRACT`, `AI-CONTRACT`, `LANGUAGE`, `SAFETY`) on which to base their own implementations.

- **Institutions / strategic partners**:
    - can access the enterprise layer (Engine, Portal, full dashboards) through dedicated collaboration – without opening the code, but with full insight into contracts, compliance documentation, and runtime modes.

If you're building a product:

- you can use the open‑core under the MIT license,
- you can implement your own engine on top of the same contracts,
- or you can work with us to integrate the ready‑made SILENCE Engine and Portal.

---

## 👥 Who is this for?

- **Founders and product teams** – who want to:
    - build a system for working with behavioral patterns without entering the medical/therapeutic space,
    - have contracts from day one that are compliant with EU AI Act limited‑risk and S11 (no diagnoses, no "what to do with your life" recommendations).

- **Research teams and labs**:
    - who need a coherent model of Objects, events, and profiles to work on sequences, rhythms, capacity, without touching clinical data.

- **Investors**:
    - who want to see:
        - what's open (packages, contracts, PatternLens),
        - what constitutes the moat (Engine, Portal, safety/compliance/billing enforcement),
        - how the monetization path (FREE / PRO / ENTERPRISE) and development "on top" of open‑core looks.

---

## 🚀 Getting started

```bash
git clone https://github.com/Patternslab-ecosystem/SILENCE.OBJECTS-monorepo-public-.git
cd SILENCE.OBJECTS-monorepo-public-
pnpm install
pnpm dev  # run the reference PatternLens app (dev)
```

- Environment details: see `technical_runbook.md` (dev + Vercel / Supabase).
- Contracts and policies: start with `00-CONTRACT.md` → `01-LANGUAGE.md` → `02-SAFETY.md` → `02/03-AI-CONTRACT.md` → `03-RUNTIME-MODES.md`.

---

## 📚 Research & Academic Collaboration

SILENCE.OBJECTS is designed so that **universities, labs, and research teams** can work with behavioral data without entering the area of medical diagnosis or health assessment.

Object, event, and profile contracts are defined in terms of **sequences, rhythms, capacity, and attention profiles** – not clinical categories – which makes it easier to build projects compliant with GDPR and EU AI Act (limited‑risk, no emotion/trait recognition).

We offer collaboration with academic partners in two modes:

- using the open‑core (`@silence/*` packages + PatternLens) as a base for your own research,
- joint projects with access to anonymized, structural data and PatternsLab tools, based on a clearly defined Academic Data Contract.

---

## 💼 Business & Monetization Overview (for investors)

The SILENCE.OBJECTS business model is based on **buyer‑based open‑core**: everything creators and individual users need (contracts, `@silence/*` packages, the reference PatternLens app) is publicly available, while commercial value is built in the enterprise layer – SILENCE Engine, Portal, PatternsLab, and full institutional dashboards.

Monetization happens on three levels:

- **PatternLens PRO (B2C / prosumer)** – paid plans extending the number of interpretations, alternatives, and archive functions, following the principles in `04-MONETIZATION.md` and `04-PRODUCT-RULES.md` (more visibility over time, not "more care").
- **PatternsLab & Portal (B2B / teams / orgs)** – tenant‑based and usage‑based licenses for organizations that want to work on signals from work and collaboration (capacity, tensions, rhythms) on their own data, with full compliance, audit, and multi‑tenant safety.
- **Enterprise Engine & Integrations** – partnership projects where the SILENCE Engine becomes an analytical layer under existing systems (HR, ops, wellbeing‑adjacent), with per‑use billing (AI tokens, events) and additional modules like predictive, intervention timing, analytics dashboard, and billing.

For investors, this means: an **open ecosystem of developers and researchers** that naturally leads to adoption of the enterprise Engine and Portal where the need for scale, governance, and regulatory compliance arises.

---

## 📖 Documentation

Core docs live under `docs/` and in a few top‑level files:

### Architecture & monorepo

- `silence-summary.md` – high‑level overview (layers, apps, modules)
- `silence-arch-complete.md` – full architecture (5 layers, data flows, security)
- `silence-repos-packages.md` – monorepo structure, packages, dependencies
- `silence-arch-diagrams.md` – ASCII diagrams, data flows, deployment topology
- `silence-implementation.md` – step‑by‑step implementation guide

### Open‑core modules

- `Moduly-Frameworka-Open-Source.md` – describes all open `@silence/*` modules, their purpose, and the research they are grounded in (behavioral sequences, rhythms, cognitive load, capacity, attention profiles, etc.)

### Data, consent & compliance

- `DATA_AND_CONSENT_PATTERNLENS_MVP_2026.md` – data categories, purposes, legal bases (GDPR/ePrivacy), consent UX, retention, user rights for PatternLens
- `docs/compliance/*` – risk logs for limited‑risk modules (e.g. `@silence/attention-profiles`), Technical File templates (Annex IV) + risk management sections for high‑risk modules (`@silence/safety`, `@silence/predictive-human-factors`)

### Pricing & monetization

- `MONETYZACJA_PATTERNLENS_2026.md` – FREE / PRO / TEAM model, limits, AI analysis packages, one‑off reports
- `APPENDIX_PRICING_GUARDRAILS_2026.md` – "Pricing constitution" – no dark patterns, no "pay or OK", transparent credits & limits, clear separation between value and safety/privacy

### S11 – Language sterility system

- `docs/s11/README.md` – what S11 is and why it exists
- `docs/s11/S11_POLICY.md` – forbidden vs allowed language (no clinical terms, only structural)
- `docs/s11/S11_GUARDRAILS_G1_G2.md` – build‑time linter + runtime guardrails
- `docs/s11/S11_COMPLIANCE.md` – how S11 supports EU AI Act & GDPR
- `docs/s11/S11_INTERNAL_CERTIFICATE.md` – internal S11 certification
- `docs/s11/IMPLEMENTATION_CHECKLIST.md` – dev checklist

---

## 🧭 Project status (2026)

- Monorepo layout, core packages and app skeletons are defined.
- Data & consent skeleton for PatternLens MVP is drafted and ready for legal review.
- S11 language framework and pricing guardrails are specified and wired into the architecture.
- Research roadmap (R‑SEQ, R‑ATTN, R‑CONSENT, R‑INT, R‑RHYTHM, R‑CAP) is in `docs/research/`, linked to specific modules.

We are deliberately moving **slow and right**: the goal is a platform that can stand up to regulators, researchers, and real users in 2026+, not just a quick demo.

---

## 🤝 Contributing

SILENCE.OBJECTS is an open‑core project. Contributions are welcome to:

- open modules under `packages/@silence/*`,
- documentation (`docs/*`), especially research summaries and implementation notes,
- tooling for S11 (linters, checkers, test cases).

Before opening a PR, please:

- read `silence-summary.md` and `silence-arch-complete.md`,
- check `docs/s11/IMPLEMENTATION_CHECKLIST.md` (language & safety),
- follow import rules (`@silence/sdk` only from apps).

---

## 📫 Contact & enterprise collaboration

- Website: [https://patternlens.app](https://patternlens.app)
- LinkedIn:
    - Founder: [https://www.linkedin.com/in/ewatchorzewska/](https://www.linkedin.com/in/ewatchorzewska/)
    - Company: [https://www.linkedin.com/company/silence-objects/](https://www.linkedin.com/company/silence-objects/)

If you:

- want to use the open‑core in your product,
- need access to the Engine and Portal in enterprise mode,
- or are interested in joint research,

reach out – we'd be happy to talk about collaboration.

---

**License:** MIT (for open‑core).  
**Project status:** active development, stable open‑core foundation, enterprise layer available for partners.
