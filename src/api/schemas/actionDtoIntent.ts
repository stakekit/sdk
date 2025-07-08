/**
 * High-level action intent
 */
export type ActionDtoIntent =
  (typeof ActionDtoIntent)[keyof typeof ActionDtoIntent];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionDtoIntent = {
  enter: "enter",
  manage: "manage",
  exit: "exit",
} as const;
