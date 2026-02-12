// Shared utility helpers will be added here.

export function notImplemented(name: string): never {
  throw new Error(`${name} is not implemented.`);
}
