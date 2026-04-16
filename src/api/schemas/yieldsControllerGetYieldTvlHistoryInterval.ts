export type YieldsControllerGetYieldTvlHistoryInterval =
  (typeof YieldsControllerGetYieldTvlHistoryInterval)[keyof typeof YieldsControllerGetYieldTvlHistoryInterval];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldsControllerGetYieldTvlHistoryInterval = {
  day: "day",
  week: "week",
  month: "month",
} as const;
