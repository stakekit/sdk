import type { RewardRateDto } from "./rewardRateDto";
import type { TokenDto } from "./tokenDto";
import type { YieldDtoNetwork } from "./yieldDtoNetwork";
import type { YieldMechanicsDto } from "./yieldMechanicsDto";
import type { YieldMetadataDto } from "./yieldMetadataDto";
import type { YieldStatisticsDto } from "./yieldStatisticsDto";
import type { YieldStatusDto } from "./yieldStatusDto";

export interface YieldDto {
  /** Unique identifier for this yield opportunity */
  id: string;
  /** Network this yield opportunity is on */
  network: YieldDtoNetwork;
  /** Accepted input tokens (auto-converted as needed) */
  inputTokens: TokenDto[];
  /** Token received from the protocol */
  outputToken?: TokenDto;
  /** Canonical deposit token - used for balances */
  token: TokenDto;
  /** Total effective yield broken down by source and token. */
  rewardRate: RewardRateDto;
  /** Key statistics and analytics for this yield opportunity */
  statistics?: YieldStatisticsDto;
  /** Current availability of user actions like enter, exit, claim */
  status: YieldStatusDto;
  /** Descriptive metadata including name, logo, description, and documentation */
  metadata: YieldMetadataDto;
  /** Operational mechanics including constraints, fees, and capabilities */
  mechanics: YieldMechanicsDto;
  /** The provider ID this yield belongs to */
  providerId: string;
  /** Optional tags for filtering or categorization */
  tags?: string[];
}
