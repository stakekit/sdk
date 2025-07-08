import type { RewardDtoYieldSource } from "./rewardDtoYieldSource";
import type { TokenDto } from "./tokenDto";

export interface RewardDto {
  /** Reward rate as a decimal (e.g. 0.04 = 4%) */
  rate: number;
  /** Whether this rate is APR or APY */
  rateType: string;
  /** Token received as reward */
  token: TokenDto;
  /** Structured source of yield (e.g. staking, protocol incentive) */
  yieldSource: RewardDtoYieldSource;
  /** Optional human-readable description of this reward */
  description?: string;
}
