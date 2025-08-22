export type YieldsControllerGetYieldsType =
  (typeof YieldsControllerGetYieldsType)[keyof typeof YieldsControllerGetYieldsType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldsControllerGetYieldsType = {
  staking: "staking",
  restaking: "restaking",
  lending: "lending",
  vault: "vault",
  fixed_yield: "fixed_yield",
  real_world_asset: "real_world_asset",
} as const;
