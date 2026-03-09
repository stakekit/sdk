/**
 * Structured source of yield (e.g. staking, protocol incentive)
 */
export type RewardDtoYieldSource =
  (typeof RewardDtoYieldSource)[keyof typeof RewardDtoYieldSource];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RewardDtoYieldSource = {
  staking: "staking",
  restaking: "restaking",
  protocol_incentive: "protocol_incentive",
  points: "points",
  lending_interest: "lending_interest",
  mev: "mev",
  real_world_asset_yield: "real_world_asset_yield",
  vault: "vault",
} as const;
