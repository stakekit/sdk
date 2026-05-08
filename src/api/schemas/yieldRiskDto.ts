import type { YieldRiskCredoraDto } from "./yieldRiskCredoraDto";
import type { YieldRiskExponentialDto } from "./yieldRiskExponentialDto";
import type { YieldRiskStakingRewardsDto } from "./yieldRiskStakingRewardsDto";

export interface YieldRiskDto {
  /** Timestamp of when StakeKit last computed risk data for this yield (ISO 8601) */
  updatedAt: string;
  exponentialFi?: YieldRiskExponentialDto;
  credora?: YieldRiskCredoraDto;
  stakingRewards?: YieldRiskStakingRewardsDto;
}
