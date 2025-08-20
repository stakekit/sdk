import type { YieldsControllerGetYieldsNetwork } from "./yieldsControllerGetYieldsNetwork";
import type { YieldsControllerGetYieldsType } from "./yieldsControllerGetYieldsType";

export type YieldsControllerGetYieldsParams = {
  /**
   * Offset for pagination
   * @minimum 0
   */
  offset?: number;
  /**
   * Number of items per page
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Filter by network
   */
  network?: YieldsControllerGetYieldsNetwork;
  /**
   * Filter by yield type
   */
  type?: YieldsControllerGetYieldsType;
  /**
   * Filter by cooldown period
   */
  hasCooldownPeriod?: boolean;
  /**
   * Filter by warmup period
   */
  hasWarmupPeriod?: boolean;
  /**
   * Filter by token symbol or address
   */
  token?: string;
  /**
   * Filter by input token symbol or address
   */
  inputToken?: string;
  /**
   * Filter by provider ID
   */
  provider?: string;
  /**
   * Search by yield name
   */
  search?: string;
};
