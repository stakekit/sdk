import type { YieldBalancesDto } from "./yieldBalancesDto";
import type { YieldErrorDto } from "./yieldErrorDto";

export interface BalancesResponseDto {
  /** Successful yield balance results */
  items: YieldBalancesDto[];
  /** Errors encountered while fetching balances */
  errors: YieldErrorDto[];
}
