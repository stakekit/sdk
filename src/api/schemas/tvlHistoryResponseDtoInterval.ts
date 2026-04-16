/**
 * Sampling interval used for this response
 */
export type TvlHistoryResponseDtoInterval =
  (typeof TvlHistoryResponseDtoInterval)[keyof typeof TvlHistoryResponseDtoInterval];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TvlHistoryResponseDtoInterval = {
  day: "day",
  week: "week",
  month: "month",
} as const;
