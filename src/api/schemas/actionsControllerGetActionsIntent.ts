export type ActionsControllerGetActionsIntent =
  (typeof ActionsControllerGetActionsIntent)[keyof typeof ActionsControllerGetActionsIntent];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionsControllerGetActionsIntent = {
  enter: "enter",
  exit: "exit",
  manage: "manage",
} as const;
