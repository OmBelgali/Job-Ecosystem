// Template-based fallback responses for predictable prompts.

export function templateFallback(templateKey: string): string {
  return `Template fallback for: ${templateKey}`;
}
