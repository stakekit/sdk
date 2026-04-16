export type ActionsControllerGetActionsIntent =
  (typeof ActionsControllerGetActionsIntent)[keyof typeof ActionsControllerGetActionsIntent];

export const ActionsControllerGetActionsIntent = {
  enter: "enter",
  exit: "exit",
  manage: "manage",
} as const;
