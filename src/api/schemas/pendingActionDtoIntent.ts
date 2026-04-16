/**
 * High-level action intent
 */
export type PendingActionDtoIntent =
  (typeof PendingActionDtoIntent)[keyof typeof PendingActionDtoIntent];

export const PendingActionDtoIntent = {
  enter: "enter",
  manage: "manage",
  exit: "exit",
} as const;
