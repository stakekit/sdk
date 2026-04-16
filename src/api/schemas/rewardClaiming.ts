/**
 * How rewards are claimed: auto, manual, or mixed
 */
export type RewardClaiming =
  (typeof RewardClaiming)[keyof typeof RewardClaiming];

export const RewardClaiming = {
  auto: "auto",
  manual: "manual",
} as const;
