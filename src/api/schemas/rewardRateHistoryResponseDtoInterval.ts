/**
 * Sampling interval used for this response
 */
export type RewardRateHistoryResponseDtoInterval =
  (typeof RewardRateHistoryResponseDtoInterval)[keyof typeof RewardRateHistoryResponseDtoInterval];

export const RewardRateHistoryResponseDtoInterval = {
  day: "day",
  week: "week",
  month: "month",
} as const;
