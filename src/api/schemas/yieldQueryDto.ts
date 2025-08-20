import type { YieldQueryDtoNetwork } from "./yieldQueryDtoNetwork";
import type { YieldQueryDtoType } from "./yieldQueryDtoType";

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
  /** Filter by yield type */
  type?: YieldQueryDtoType;
  /** Filter by cooldown period */
  hasCooldownPeriod?: boolean;
  /** Filter by warmup period */
  hasWarmupPeriod?: boolean;
  /** Filter by token symbol or address */
  token?: string;
  /** Filter by input token symbol or address */
  inputToken?: string;
  /** Filter by provider ID */
  provider?: string;
  /** Search by yield name */
  search?: string;
}
