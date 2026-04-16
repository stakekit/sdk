import type { YieldsControllerGetBalanceHistoryInterval } from "./yieldsControllerGetBalanceHistoryInterval";
import type { YieldsControllerGetBalanceHistorySort } from "./yieldsControllerGetBalanceHistorySort";

export type YieldsControllerGetBalanceHistoryParams = {
  /**
   * Wallet address to fetch history for
   */
  address: string;
  /**
   * Start of time range (ISO 8601)
   */
  from?: string;
  /**
   * End of time range (ISO 8601). Defaults to now.
   */
  to?: string;
  /**
   * Block number for a point-in-time snapshot. When provided, from/to/interval are ignored.
   */
  blockNumber?: number;
  /**
   * Sampling resolution for the time series
   */
  interval?: YieldsControllerGetBalanceHistoryInterval;
  /**
   * Sort order by timestamp. Defaults to most recent first (desc).
   */
  sort?: YieldsControllerGetBalanceHistorySort;
  /**
   * Maximum number of items to return (default 30, max 100)
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Pagination offset
   * @minimum 0
   */
  offset?: number;
};
