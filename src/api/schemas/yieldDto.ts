import type { RewardRateDto } from "./rewardRateDto";
import type { TokenDto } from "./tokenDto";
import type { YieldDtoNetwork } from "./yieldDtoNetwork";
import type { YieldMechanicsDto } from "./yieldMechanicsDto";
import type { YieldMetadataDto } from "./yieldMetadataDto";
import type { YieldStateDto } from "./yieldStateDto";
import type { YieldStatisticsDto } from "./yieldStatisticsDto";
import type { YieldStatusDto } from "./yieldStatusDto";

export interface YieldDto {
  /** Unique identifier for this yield opportunity */
  id: string;
  /** Network this yield opportunity is on */
  network: YieldDtoNetwork;
  /** EVM chain ID for this network (only for EVM networks) */
  chainId?: string;
  /** Accepted input tokens (auto-converted as needed) */
  inputTokens: TokenDto[];
  /** Token received from the protocol */
  outputToken?: TokenDto;
  /** Canonical deposit token - used for balances */
  token: TokenDto;
  /** Canonical deposit tokens - used for balances */
  tokens: TokenDto[];
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
  /** Dynamic, real-time protocol-level state values that affect entering or exiting a yield (e.g., pool price, capacity, price per share, liquidity, queue depth) */
  state?: YieldStateDto;
}
