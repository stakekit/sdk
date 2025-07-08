/**
 * Filter by action intent
 */
export type ActionsQueryDtoIntent =
  (typeof ActionsQueryDtoIntent)[keyof typeof ActionsQueryDtoIntent];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionsQueryDtoIntent = {
  enter: "enter",
  manage: "manage",
  exit: "exit",
} as const;
