export type YieldsControllerGetYieldTvlHistoryInterval =
  (typeof YieldsControllerGetYieldTvlHistoryInterval)[keyof typeof YieldsControllerGetYieldTvlHistoryInterval];

export const YieldsControllerGetYieldTvlHistoryInterval = {
  day: "day",
  week: "week",
  month: "month",
} as const;
