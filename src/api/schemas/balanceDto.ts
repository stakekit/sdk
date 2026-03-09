import type { BalanceDtoPriceRange } from "./balanceDtoPriceRange";
import type { BalanceDtoValidator } from "./balanceDtoValidator";
import type { BalanceType } from "./balanceType";
import type { PendingActionDto } from "./pendingActionDto";
import type { TokenDto } from "./tokenDto";
import type { ValidatorDto } from "./validatorDto";

export interface BalanceDto {
  /** User wallet address that owns this balance */
  address: string;
  type: BalanceType;
  /** Balance amount in underlying token */
  amount: string;
  /** Raw balance amount (full precision) */
  amountRaw: string;
  /**
   * Date relevant to this balance state
   * @nullable
   */
  date?: string | null;
  /** Fee configuration ID (if applicable) */
  feeConfigurationId?: string;
  /** Pending actions for this balance */
  pendingActions: PendingActionDto[];
  /** Token used for balance amounts */
  token: TokenDto;
  /**
   * Validator information (if applicable)
   * @nullable
   */
  validator?: BalanceDtoValidator;
  /**
   * Multiple validators information (when balance is distributed across multiple validators)
   * @nullable
   */
  validators?: ValidatorDto[] | null;
  /**
   * Value of the balance in USD
   * @nullable
   */
  amountUsd?: string | null;
  /** Whether this balance is currently earning rewards */
  isEarning: boolean;
  /** Price range for concentrated liquidity positions in tokens[1]/tokens[0] format (e.g., if tokens[0]=WETH and tokens[1]=USDC, then priceRange represents USDC/WETH) */
  priceRange?: BalanceDtoPriceRange;
  /** NFT token ID for liquidity positions (e.g., PancakeSwap V3 position NFT ID) */
  tokenId?: string;
}
