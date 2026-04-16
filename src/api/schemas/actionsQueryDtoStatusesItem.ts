export type ActionsQueryDtoStatusesItem =
  (typeof ActionsQueryDtoStatusesItem)[keyof typeof ActionsQueryDtoStatusesItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionsQueryDtoStatusesItem = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
