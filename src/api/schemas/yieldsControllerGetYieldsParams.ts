import type { YieldsControllerGetYieldsNetwork } from "./yieldsControllerGetYieldsNetwork";
import type { YieldsControllerGetYieldsSort } from "./yieldsControllerGetYieldsSort";
import type { YieldsControllerGetYieldsType } from "./yieldsControllerGetYieldsType";
import type { YieldsControllerGetYieldsTypesItem } from "./yieldsControllerGetYieldsTypesItem";

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
   * Filter by EVM chain ID (Ethereum: 1, Polygon: 137)
   */
  chainId?: string;
  /**
   * Filter by multiple networks (comma separated)
   */
  networks?: string;
  /**
   * @maxLength 200
   */
  yieldId?: string;
  /**
   * @maxLength 200
   * @maxItems 100
   */
  yieldIds?: string[];
  /**
   * Filter by yield type
   */
  type?: YieldsControllerGetYieldsType;
  /**
   * Filter by multiple yield types (comma separated)
   */
  types?: YieldsControllerGetYieldsTypesItem[];
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
   * Filter by multiple input token symbol or address (comma separated)
   */
  inputTokens?: string[];
  /**
   * Filter by provider ID
   */
  provider?: string;
  /**
   * Filter by multiple provider IDs (comma separated)
   */
  providers?: string[];
  /**
   * Search by yield name
   */
  search?: string;
  /**
   * Sort by yield status
   */
  sort?: YieldsControllerGetYieldsSort;
};
