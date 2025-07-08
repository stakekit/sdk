export interface YieldStatisticsDto {
  /** Total value locked in USD */
  tvlUsd: string;
  /** Total value locked in primary underlying token */
  tvl: string;
  /** Number of users with active positions in the yield */
  uniqueUsers: number;
  /** Average position size in USD */
  averagePositionSizeUsd: string;
  /** Average position size in primary underlying token */
  averagePositionSize: string;
}
