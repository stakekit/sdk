import type { BalanceDto } from "./balanceDto";
import type { YieldBalancesDtoOutputTokenBalance } from "./yieldBalancesDtoOutputTokenBalance";

export interface YieldBalancesDto {
  /** Unique identifier of the yield */
  yieldId: string;
  /** List of balances for this yield */
  balances: BalanceDto[];
  /**
   * Balance for the output token
   * @nullable
   */
  outputTokenBalance?: YieldBalancesDtoOutputTokenBalance;
}
