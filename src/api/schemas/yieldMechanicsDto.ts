import type { PossibleFeeTakingMechanismsDto } from "./possibleFeeTakingMechanismsDto";
import type { RewardClaiming } from "./rewardClaiming";
import type { RewardSchedule } from "./rewardSchedule";
import type { TimePeriodDto } from "./timePeriodDto";
import type { TokenDto } from "./tokenDto";
import type { YieldEntryLimitsDto } from "./yieldEntryLimitsDto";
import type { YieldFeeDto } from "./yieldFeeDto";
import type { YieldMechanicsArgumentsDto } from "./yieldMechanicsArgumentsDto";
import type { YieldMechanicsDtoExtraTransactionFormatsSupportedItem } from "./yieldMechanicsDtoExtraTransactionFormatsSupportedItem";
import type { YieldType } from "./yieldType";

export interface YieldMechanicsDto {
  type: YieldType;
  /** Indicates whether this yield requires validator selection */
  requiresValidatorSelection?: boolean;
  rewardSchedule: RewardSchedule;
  rewardClaiming: RewardClaiming;
  /** Token used for gas fees (typically native) */
  gasFeeToken: TokenDto;
  /** Lockup period - minimum time before exit can be initiated */
  lockupPeriod?: TimePeriodDto;
  /** Cooldown period required before exit is allowed */
  cooldownPeriod?: TimePeriodDto;
  /** Warmup period before rewards start accruing */
  warmupPeriod?: TimePeriodDto;
  /** Fees charged to the user for this yield (e.g., deposit, management, performance). */
  fee?: YieldFeeDto;
  /** Entry amount limits for this yield */
  entryLimits?: YieldEntryLimitsDto;
  /** Supports Ledger Wallet API (connect via Ledger Live) */
  supportsLedgerWalletApi?: boolean;
  /** Additional transaction formats supported (e.g. safe, batch) */
  extraTransactionFormatsSupported?: YieldMechanicsDtoExtraTransactionFormatsSupportedItem[];
  /** Arguments required for each action (enter, exit, manage, etc.) */
  arguments?: YieldMechanicsArgumentsDto;
  /** Possible fee-taking mechanisms for the user or integrator (i.e., what fees the user/integrator can potentially earn from this yield). */
  possibleFeeTakingMechanisms?: PossibleFeeTakingMechanismsDto;
}
