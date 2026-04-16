/**
 * Sampling interval used for this response
 */
export type TvlHistoryResponseDtoInterval =
  (typeof TvlHistoryResponseDtoInterval)[keyof typeof TvlHistoryResponseDtoInterval];

export const TvlHistoryResponseDtoInterval = {
  day: "day",
  week: "week",
  month: "month",
} as const;
