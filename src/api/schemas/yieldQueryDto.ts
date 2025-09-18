import type { YieldQueryDtoNetwork } from "./yieldQueryDtoNetwork";
import type { YieldQueryDtoSort } from "./yieldQueryDtoSort";
import type { YieldQueryDtoType } from "./yieldQueryDtoType";
import type { YieldQueryDtoTypesItem } from "./yieldQueryDtoTypesItem";

export interface YieldQueryDto {
  /**
   * Offset for pagination
   * @minimum 0
   */
  offset?: number;
  /**
   * Maximum number of items to return
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /** Filter by network */
  network?: YieldQueryDtoNetwork;
  /** Filter by multiple networks (comma separated) */
  networks?: string;
  /** @maxLength 200 */
  yieldId?: string;
  /** @maxItems 100 */
  yieldIds?: string[];
  /** Filter by yield type */
  type?: YieldQueryDtoType;
  /** Filter by multiple yield types (comma separated) */
  types?: YieldQueryDtoTypesItem[];
  /** Filter by cooldown period */
  hasCooldownPeriod?: boolean;
  /** Filter by warmup period */
  hasWarmupPeriod?: boolean;
  /** Filter by token symbol or address */
  token?: string;
  /** Filter by input token symbol or address */
  inputToken?: string;
  /** Filter by multiple input token symbol or address (comma separated) */
  inputTokens?: string[];
  /** Filter by provider ID */
  provider?: string;
  /** Filter by multiple provider IDs (comma separated) */
  providers?: string[];
  /** Search by yield name */
  search?: string;
  /** Sort by yield status */
  sort?: YieldQueryDtoSort;
}
