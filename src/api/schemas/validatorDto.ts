import type { RewardRateDto } from "./rewardRateDto";

export interface ValidatorDto {
  /** Validator address or ID */
  address: string;
  /** Validator display name */
  name: string;
  /** Validator logo URI */
  logoURI: string;
  /** Link to validator website */
  website: string;
  /** Detailed reward rate breakdown by source (emissions, MEV, fees, etc.) */
  rewardRate?: RewardRateDto;
  /** Commission rate charged by validator */
  commission: number;
  /** Total value locked with this validator in USD */
  tvlUsd: string;
  /** Total value locked with this validator in native token */
  tvl: string;
  /** Validator's voting power share (0–1) */
  votingPower: number;
  /** Whether this validator is flagged as preferred */
  preferred: boolean;
  /** Minimum stake allowed in native token */
  minimumStake: string;
  /** Maximum available stake before hitting cap in native token */
  remainingPossibleStake: string;
  /** Number of remaining nominator/delegator slots (for capped chains) */
  remainingSlots: number;
  /** Number of current nominators */
  nominatorCount: number;
  /** Validator status description (active, jailed, unbonding, etc.) */
  status?: string;
  /** ID of the provider backing this validator */
  providerId?: string;
}
