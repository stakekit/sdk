import type { YieldsControllerGetYieldTvlHistoryInterval } from "./yieldsControllerGetYieldTvlHistoryInterval";
import type { YieldsControllerGetYieldTvlHistoryPeriod } from "./yieldsControllerGetYieldTvlHistoryPeriod";

export type YieldsControllerGetYieldTvlHistoryParams = {
  /**
   * Pagination offset
   * @minimum 0
   */
  offset?: number;
  /**
   * Maximum number of data points to return (default 100, max 365)
   * @minimum 1
   * @maximum 365
   */
  limit?: number;
  /**
   * Start of time range (ISO 8601). Overrides period when provided.
   */
  from?: string;
  /**
   * End of time range (ISO 8601). Defaults to now.
   */
  to?: string;
  /**
   * Predefined time window. Ignored when from/to are provided. Default: 30d.
   */
  period?: YieldsControllerGetYieldTvlHistoryPeriod;
  /**
   * Sampling resolution (day/week/month). Default: day.
   */
  interval?: YieldsControllerGetYieldTvlHistoryInterval;
};
