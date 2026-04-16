import type { BalanceDto } from "./balanceDto";
import type { RewardRateDto } from "./rewardRateDto";

export interface YieldBalancesDto {
  /** Unique identifier of the yield */
  yieldId: string;
  /** List of balances for this yield */
  balances: BalanceDto[];
  /** Balance for the output token */
  outputTokenBalance?: BalanceDto | null;
  /** Personalized reward rate breakdown for this balance position */
  rewardRate?: RewardRateDto | null;
}
