export interface RewardRateSnapshotDto {
  /** Timestamp of this snapshot (ISO 8601) */
  timestamp: string;
  /** Reward rate as a decimal string */
  rewardRate: string;
}
