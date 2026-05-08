import type { YieldRiskStakingRewardsDtoChain } from "./yieldRiskStakingRewardsDtoChain";
import type { YieldRiskStakingRewardsDtoContractAddress } from "./yieldRiskStakingRewardsDtoContractAddress";
import type { YieldRiskStakingRewardsDtoPotentialRating } from "./yieldRiskStakingRewardsDtoPotentialRating";
import type { YieldRiskStakingRewardsDtoPotentialScore } from "./yieldRiskStakingRewardsDtoPotentialScore";
import type { YieldRiskStakingRewardsDtoProfileUrl } from "./yieldRiskStakingRewardsDtoProfileUrl";
import type { YieldRiskStakingRewardsDtoProviderName } from "./yieldRiskStakingRewardsDtoProviderName";
import type { YieldRiskStakingRewardsDtoRatedAt } from "./yieldRiskStakingRewardsDtoRatedAt";
import type { YieldRiskStakingRewardsDtoRatedSince } from "./yieldRiskStakingRewardsDtoRatedSince";
import type { YieldRiskStakingRewardsDtoRating } from "./yieldRiskStakingRewardsDtoRating";
import type { YieldRiskStakingRewardsDtoReportUrl } from "./yieldRiskStakingRewardsDtoReportUrl";
import type { YieldRiskStakingRewardsDtoScore } from "./yieldRiskStakingRewardsDtoScore";
import type { YieldRiskStakingRewardsDtoType } from "./yieldRiskStakingRewardsDtoType";
import type { YieldRiskStakingRewardsDtoVersion } from "./yieldRiskStakingRewardsDtoVersion";
import type { YieldRiskStakingRewardsMetricsDto } from "./yieldRiskStakingRewardsMetricsDto";

export interface YieldRiskStakingRewardsDto {
  /** Staking Rewards rating */
  rating?: YieldRiskStakingRewardsDtoRating;
  /** Staking Rewards score (1-5) */
  score?: YieldRiskStakingRewardsDtoScore;
  /** Staking Rewards potential rating */
  potentialRating?: YieldRiskStakingRewardsDtoPotentialRating;
  /** Staking Rewards potential score (1-5) */
  potentialScore?: YieldRiskStakingRewardsDtoPotentialScore;
  /** Date when rating was assessed */
  ratedAt?: YieldRiskStakingRewardsDtoRatedAt;
  /** Date since product has been rated */
  ratedSince?: YieldRiskStakingRewardsDtoRatedSince;
  /** Staking Rewards product profile URL */
  profileUrl?: YieldRiskStakingRewardsDtoProfileUrl;
  /** Staking Rewards full report URL */
  reportUrl?: YieldRiskStakingRewardsDtoReportUrl;
  /** Staking Rewards provider name */
  providerName?: YieldRiskStakingRewardsDtoProviderName;
  /** Staking Rewards methodology version */
  version?: YieldRiskStakingRewardsDtoVersion;
  /** Staking Rewards product type */
  type?: YieldRiskStakingRewardsDtoType;
  /** Chain label returned by Staking Rewards */
  chain?: YieldRiskStakingRewardsDtoChain;
  /** Contract address returned by Staking Rewards */
  contractAddress?: YieldRiskStakingRewardsDtoContractAddress;
  riskMetrics?: YieldRiskStakingRewardsMetricsDto;
}
