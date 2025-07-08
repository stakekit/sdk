import type { BalanceDto } from "./balanceDto";

export interface YieldBalancesDto {
  /** Unique identifier of the yield */
  yieldId: string;
  /** List of balances for this yield */
  balances: BalanceDto[];
}
