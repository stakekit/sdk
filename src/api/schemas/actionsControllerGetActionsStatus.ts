export type ActionsControllerGetActionsStatus =
  (typeof ActionsControllerGetActionsStatus)[keyof typeof ActionsControllerGetActionsStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionsControllerGetActionsStatus = {
  pending: "pending",
  completed: "completed",
  failed: "failed",
} as const;
