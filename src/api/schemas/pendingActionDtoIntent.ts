/**
 * High-level action intent
 */
export type PendingActionDtoIntent =
  (typeof PendingActionDtoIntent)[keyof typeof PendingActionDtoIntent];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PendingActionDtoIntent = {
  enter: "enter",
  manage: "manage",
  exit: "exit",
} as const;
