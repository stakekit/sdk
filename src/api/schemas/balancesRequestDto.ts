import type { BalancesQueryDto } from "./balancesQueryDto";

export interface BalancesRequestDto {
  /** Array of balance queries */
  queries: BalancesQueryDto[];
}
