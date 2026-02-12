// Outbox pattern scaffold for reliable event publishing.

export interface OutboxEvent {
  id: string;
  type: string;
  payload: unknown;
  createdAt: Date;
  processedAt?: Date;
}

export function enqueueOutboxEvent(event: OutboxEvent): void {
  // Real persistence will be implemented later.
  throw new Error("Outbox persistence is not implemented yet.");
}
