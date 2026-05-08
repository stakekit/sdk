/**
 * Provider source label
 */
export type YieldRiskEntryDtoSource =
  (typeof YieldRiskEntryDtoSource)[keyof typeof YieldRiskEntryDtoSource];

export const YieldRiskEntryDtoSource = {
  credora: "credora",
  exponential: "exponential",
  stakingRewards: "stakingRewards",
} as const;
