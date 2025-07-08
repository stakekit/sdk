import type { RewardDto } from "./rewardDto";

export interface RewardRateDto {
  /** Estimated reward rate across all sources (e.g. staking, points) */
  total: number;
  /** Whether this reward rate is APR or APY */
  rateType: string;
  /** Breakdown of reward rates by source */
  components: RewardDto[];
}
