// Shared logger scaffold. Replace with a real logger later.

export function logInfo(message: string, meta?: unknown): void {
  // eslint-disable-next-line no-console
  console.log("[INFO]", message, meta ?? "");
}

export function logError(message: string, meta?: unknown): void {
  // eslint-disable-next-line no-console
  console.error("[ERROR]", message, meta ?? "");
}

