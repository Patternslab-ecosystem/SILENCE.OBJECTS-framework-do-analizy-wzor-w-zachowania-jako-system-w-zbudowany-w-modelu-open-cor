// packages/@silence/contracts/src/index.ts
export type ActorId = string & { readonly _brand: 'ActorId' };
export type TenantId = string & { readonly _brand: 'TenantId' };
export type ObjectId = string & { readonly _brand: 'ObjectId' };

export interface ActorContext {
  readonly actorId: ActorId;
  readonly tenantId: TenantId | null;
}

export interface SilenceObject {
  readonly id: ObjectId;
  readonly content: string;
  readonly createdAt: Date;
  readonly actorId: ActorId;
}

export interface Pattern {
  readonly id: string;
  readonly objectId: ObjectId;
  readonly label: string;
  readonly confidence: number; // 0-1
  readonly phase: 'context' | 'tension' | 'meaning' | 'function';
}

export interface AnalysisResult {
  readonly objectId: ObjectId;
  readonly lensA: StructuralProposal;
  readonly lensB: StructuralProposal;
  readonly patterns: readonly Pattern[];
}

export interface StructuralProposal {
  readonly label: string;
  readonly description: string;
  readonly hypothesis: string;
}

// Event Bus Types
export type SilenceEventType = 
  | 'PatternCreated' 
  | 'ObjectAnalyzed' 
  | 'RiskFlagRaised' 
  | 'CrisisDetected';

export interface SilenceEventPayloads {
  PatternCreated: { patternId: string; objectId: ObjectId };
  ObjectAnalyzed: { objectId: ObjectId };
  RiskFlagRaised: { objectId: ObjectId; level: 'low' | 'medium' | 'high' };
  CrisisDetected: { objectId: ObjectId; layer: 1 | 2 | 3 };
}// @silence/contracts - Initial entry point
export const version = '0.1.0';
