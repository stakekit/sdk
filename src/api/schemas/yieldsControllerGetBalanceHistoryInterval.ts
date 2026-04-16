export type YieldsControllerGetBalanceHistoryInterval =
  (typeof YieldsControllerGetBalanceHistoryInterval)[keyof typeof YieldsControllerGetBalanceHistoryInterval];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldsControllerGetBalanceHistoryInterval = {
  block: "block",
  hour: "hour",
  day: "day",
  week: "week",
} as const;
