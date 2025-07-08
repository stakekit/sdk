/**
 * Type of yield mechanism (staking, restaking, LP, vault, etc.)
 */
export type YieldType = (typeof YieldType)[keyof typeof YieldType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldType = {
  staking: "staking",
  restaking: "restaking",
  lending: "lending",
  vault: "vault",
  fixed_yield: "fixed_yield",
  real_world_asset: "real_world_asset",
} as const;
