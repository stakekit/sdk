import type { YieldsControllerGetYieldRewardsSort } from "./yieldsControllerGetYieldRewardsSort";

export type YieldsControllerGetYieldRewardsParams = {
  /**
   * Wallet address to fetch rewards for
   */
  address: string;
  /**
   * Start of time range (ISO 8601)
   */
  from?: string;
  /**
   * End of time range (ISO 8601)
   */
  to?: string;
  /**
   * Sort order by timestamp (default: desc)
   */
  sort?: YieldsControllerGetYieldRewardsSort;
  /**
   * Maximum number of items to return (default: 100, max: 100)
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Pagination offset (default: 0)
   * @minimum 0
   */
  offset?: number;
};
