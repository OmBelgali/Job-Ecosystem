// Placeholder AI model router. Real routing logic will be implemented later.

export type AiProvider = "openrouter.free" | "groq.free" | "huggingface";

export function routeModel(provider: AiProvider): string {
  // Return a simple identifier for now.
  return `ai-provider:${provider}`;
}
