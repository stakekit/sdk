export type ActionsQueryDtoStatusesItem =
  (typeof ActionsQueryDtoStatusesItem)[keyof typeof ActionsQueryDtoStatusesItem];

export const ActionsQueryDtoStatusesItem = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
