export interface YieldStatisticsDto {
  /**
   * Total value locked in USD
   * @nullable
   */
  tvlUsd?: string | null;
  /**
   * Total value locked in primary underlying token
   * @nullable
   */
  tvl?: string | null;
  /**
   * Number of users with active positions in the yield
   * @nullable
   */
  uniqueUsers?: number | null;
  /**
   * Average position size in USD
   * @nullable
   */
  averagePositionSizeUsd?: string | null;
  /**
   * Average position size in primary underlying token
   * @nullable
   */
  averagePositionSize?: string | null;
}
