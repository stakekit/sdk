import type { YieldsControllerGetYieldsNetwork } from "./yieldsControllerGetYieldsNetwork";

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
   * Filter by token symbol or address
   */
  token?: string;
  /**
   * Filter by input token symbol or address
   */
  inputToken?: string;
  /**
   * Filter by provider id
   */
  provider?: string;
};
