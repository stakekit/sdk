/**
 * Filter by action intent
 */
export type ActionsQueryDtoIntent =
  (typeof ActionsQueryDtoIntent)[keyof typeof ActionsQueryDtoIntent];

export const ActionsQueryDtoIntent = {
  enter: "enter",
  manage: "manage",
  exit: "exit",
} as const;
