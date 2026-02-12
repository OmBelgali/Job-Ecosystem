// Feature flag configuration scaffold.

export function isFeatureEnabled(flag: string): boolean {
  const raw = process.env[`FEATURE_${flag.toUpperCase()}`];
  return raw === "1" || raw === "true";
}
