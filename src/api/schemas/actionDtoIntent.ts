/**
 * High-level action intent
 */
export type ActionDtoIntent =
  (typeof ActionDtoIntent)[keyof typeof ActionDtoIntent];

export const ActionDtoIntent = {
  enter: "enter",
  manage: "manage",
  exit: "exit",
} as const;
