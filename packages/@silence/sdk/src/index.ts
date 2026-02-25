// packages/@silence/sdk/src/index.ts

export * from '@silence/contracts';
export { eventBus } from '@silence/events';
export { validate as validateS11, sanitize } from '@silence/language';

// Wrapped Core Calls
export async function analyzeObject(
  content: string, 
  ctx: import('@silence/contracts').ActorContext
): Promise<import('@silence/contracts').AnalysisResult> {
  // Logic routed to @silence/core internally
  // Always passes through @silence/language
  throw new Error('Not implemented: routing to @silence/core');
}
