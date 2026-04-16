export type ActionsControllerGetActionsStatusesItem =
  (typeof ActionsControllerGetActionsStatusesItem)[keyof typeof ActionsControllerGetActionsStatusesItem];

export const ActionsControllerGetActionsStatusesItem = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
