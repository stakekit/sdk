import type { CampaignPayoutFrequency } from "./campaignPayoutFrequency";
import type { CampaignQualificationConfigDto } from "./campaignQualificationConfigDto";
import type { CampaignRewardMode } from "./campaignRewardMode";
import type { CampaignStatus } from "./campaignStatus";
import type { RewardRateDto } from "./rewardRateDto";
import type { TokenDto } from "./tokenDto";

export interface YieldCampaignDto {
  id: string;
  /** @nullable */
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  yieldId: string;
  status: CampaignStatus;
  rewardMode: CampaignRewardMode;
  /** Campaign reward rate in the same shape as yield reward rates. Null when TVL or emission data is unavailable. */
  rewardRate: RewardRateDto | null;
  /** Total campaign reward budget. */
  totalBudget: string;
  /** Amount of budget distributed so far. */
  distributedBudget: string;
  /** Amount of budget remaining. */
  remainingBudget: string;
  /**
   * Configured hourly emission amount.
   * @nullable
   */
  configuredHourlyEmission?: string | null;
  /**
   * Optional APY ceiling as a decimal rate, where 0.125 = 12.5%.
   * @nullable
   */
  apyCeiling?: number | null;
  /** Qualification configuration for the campaign. */
  qualificationConfig: CampaignQualificationConfigDto;
  startTime: string;
  endTime: string;
  /** @nullable */
  lastProcessedHour?: string | null;
  /** @nullable */
  nextPayoutDueAt?: string | null;
  payoutFrequency: CampaignPayoutFrequency;
  /** Reward token metadata. */
  rewardToken: TokenDto;
}
