export type ActionsControllerGetActionsStatus =
  (typeof ActionsControllerGetActionsStatus)[keyof typeof ActionsControllerGetActionsStatus];

export const ActionsControllerGetActionsStatus = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
