// Central event type registry scaffold.

export type KodNestEventType =
  | "user.created"
  | "user.profile.updated"
  | "job.ingested"
  | "job.match.created"
  | "readiness.updated"
  | "resume.generated"
  | "notification.sent"
  | "analytics.snapshot.created";

