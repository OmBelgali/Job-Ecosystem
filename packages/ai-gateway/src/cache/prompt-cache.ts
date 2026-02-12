// Simple in-memory prompt cache placeholder.

const cache = new Map<string, string>();

export function getFromPromptCache(key: string): string | undefined {
  return cache.get(key);
}

export function setPromptCache(key: string, value: string): void {
  cache.set(key, value);
}
