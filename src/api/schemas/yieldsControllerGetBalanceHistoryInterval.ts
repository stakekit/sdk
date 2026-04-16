export type YieldsControllerGetBalanceHistoryInterval =
  (typeof YieldsControllerGetBalanceHistoryInterval)[keyof typeof YieldsControllerGetBalanceHistoryInterval];

export const YieldsControllerGetBalanceHistoryInterval = {
  block: "block",
  hour: "hour",
  day: "day",
  week: "week",
} as const;
