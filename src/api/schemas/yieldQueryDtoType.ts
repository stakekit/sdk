/**
 * Filter by yield type
 */
export type YieldQueryDtoType =
  (typeof YieldQueryDtoType)[keyof typeof YieldQueryDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldQueryDtoType = {
  staking: "staking",
  restaking: "restaking",
  lending: "lending",
  vault: "vault",
  fixed_yield: "fixed_yield",
  real_world_asset: "real_world_asset",
} as const;
