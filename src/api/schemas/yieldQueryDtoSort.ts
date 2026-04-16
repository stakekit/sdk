/**
 * Sort by yield status or reward rate
 */
export type YieldQueryDtoSort =
  (typeof YieldQueryDtoSort)[keyof typeof YieldQueryDtoSort];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldQueryDtoSort = {
  statusEnterAsc: "statusEnterAsc",
  statusEnterDesc: "statusEnterDesc",
  statusExitAsc: "statusExitAsc",
  statusExitDesc: "statusExitDesc",
  rewardRateAsc: "rewardRateAsc",
  rewardRateDesc: "rewardRateDesc",
} as const;
