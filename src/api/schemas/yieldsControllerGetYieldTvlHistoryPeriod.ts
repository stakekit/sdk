export type YieldsControllerGetYieldTvlHistoryPeriod =
  (typeof YieldsControllerGetYieldTvlHistoryPeriod)[keyof typeof YieldsControllerGetYieldTvlHistoryPeriod];

export const YieldsControllerGetYieldTvlHistoryPeriod = {
  "1d": "1d",
  "7d": "7d",
  "30d": "30d",
  "90d": "90d",
  "1y": "1y",
  all: "all",
} as const;
