export type YieldsControllerGetYieldsSort =
  (typeof YieldsControllerGetYieldsSort)[keyof typeof YieldsControllerGetYieldsSort];

export const YieldsControllerGetYieldsSort = {
  statusEnterAsc: "statusEnterAsc",
  statusEnterDesc: "statusEnterDesc",
  statusExitAsc: "statusExitAsc",
  statusExitDesc: "statusExitDesc",
  rewardRateAsc: "rewardRateAsc",
  rewardRateDesc: "rewardRateDesc",
} as const;
