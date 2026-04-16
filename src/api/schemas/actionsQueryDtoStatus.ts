/**
 * Filter by action status
 */
export type ActionsQueryDtoStatus =
  (typeof ActionsQueryDtoStatus)[keyof typeof ActionsQueryDtoStatus];

export const ActionsQueryDtoStatus = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
