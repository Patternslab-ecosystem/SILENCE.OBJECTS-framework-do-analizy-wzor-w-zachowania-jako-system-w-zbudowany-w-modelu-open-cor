# Package Map (Monorepo → Packages → Docs)

## Open‑core packages (`packages/@silence/*`)
- **@silence/contracts**: Location: `packages/@silence/contracts` | Role: Type system for Objects, Events.
- **@silence/events**: Location: `packages/@silence/events` | Role: Typed event bus.
- **@silence/core**: Location: `packages/@silence/core` | Role: Four‑phase analysis engine.
- **@silence/sdk**: Location: `packages/@silence/sdk` | Role: Facade for apps to consume framework logic.

## Enterprise packages (`ee/*`)
- **ee/behavioral-engine**: Glue engine over open‑core. Proprietary.
- **ee/safety**: Compliance & Medical/Legal guardrails. Proprietary.
