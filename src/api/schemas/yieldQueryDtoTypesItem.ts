export type YieldQueryDtoTypesItem =
  (typeof YieldQueryDtoTypesItem)[keyof typeof YieldQueryDtoTypesItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldQueryDtoTypesItem = {
  staking: "staking",
  restaking: "restaking",
  lending: "lending",
  vault: "vault",
  fixed_yield: "fixed_yield",
  real_world_asset: "real_world_asset",
  concentrated_liquidity_pool: "concentrated_liquidity_pool",
  liquidity_pool: "liquidity_pool",
} as const;
