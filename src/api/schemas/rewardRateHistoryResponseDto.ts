import type { RewardRateHistoryResponseDtoInterval } from "./rewardRateHistoryResponseDtoInterval";

export interface RewardRateHistoryResponseDto {
  /** Total number of items available */
  total: number;
  /** Offset of the current page */
  offset: number;
  /** Limit of the current page */
  limit: number;
  /** Unique identifier of the yield */
  yieldId: string;
  /** Sampling interval used for this response */
  interval: RewardRateHistoryResponseDtoInterval;
  /** Start of the returned date range (ISO 8601) */
  from: string;
  /** End of the returned date range (ISO 8601) */
  to: string;
}
