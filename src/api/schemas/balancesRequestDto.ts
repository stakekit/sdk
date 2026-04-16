import type { BalancesQueryDto } from "./balancesQueryDto";

export interface BalancesRequestDto {
  /**
   * Array of balance queries (maximum 25 queries per request)
   * @minItems 1
   * @maxItems 25
   */
  queries: BalancesQueryDto[];
}
