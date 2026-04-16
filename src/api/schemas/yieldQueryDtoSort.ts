/**
 * Sort by yield status or reward rate
 */
export type YieldQueryDtoSort =
  (typeof YieldQueryDtoSort)[keyof typeof YieldQueryDtoSort];

export const YieldQueryDtoSort = {
  statusEnterAsc: "statusEnterAsc",
  statusEnterDesc: "statusEnterDesc",
  statusExitAsc: "statusExitAsc",
  statusExitDesc: "statusExitDesc",
  rewardRateAsc: "rewardRateAsc",
  rewardRateDesc: "rewardRateDesc",
} as const;
