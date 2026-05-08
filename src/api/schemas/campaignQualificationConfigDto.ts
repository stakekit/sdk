import type { CampaignQualificationType } from "./campaignQualificationType";

export interface CampaignQualificationConfigDto {
  type: CampaignQualificationType;
  /** Minimum qualifying token amount balance. */
  threshold: string;
  /**
   * Optional per-user token cap.
   * @nullable
   */
  maxIncentivizedTvlToken?: string | null;
}
