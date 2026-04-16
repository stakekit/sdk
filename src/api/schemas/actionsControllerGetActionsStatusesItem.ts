export type ActionsControllerGetActionsStatusesItem =
  (typeof ActionsControllerGetActionsStatusesItem)[keyof typeof ActionsControllerGetActionsStatusesItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionsControllerGetActionsStatusesItem = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
