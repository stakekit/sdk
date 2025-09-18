export type YieldsControllerGetYieldsSort =
  (typeof YieldsControllerGetYieldsSort)[keyof typeof YieldsControllerGetYieldsSort];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldsControllerGetYieldsSort = {
  statusEnterAsc: "statusEnterAsc",
  statusEnterDesc: "statusEnterDesc",
  statusExitAsc: "statusExitAsc",
  statusExitDesc: "statusExitDesc",
} as const;
