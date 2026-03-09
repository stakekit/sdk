export type YieldsControllerGetYieldsTypesItem =
  (typeof YieldsControllerGetYieldsTypesItem)[keyof typeof YieldsControllerGetYieldsTypesItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldsControllerGetYieldsTypesItem = {
  staking: "staking",
  restaking: "restaking",
  lending: "lending",
  vault: "vault",
  fixed_yield: "fixed_yield",
  real_world_asset: "real_world_asset",
  concentrated_liquidity_pool: "concentrated_liquidity_pool",
  liquidity_pool: "liquidity_pool",
} as const;
