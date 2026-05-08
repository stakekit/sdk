export type CampaignQualificationType =
  (typeof CampaignQualificationType)[keyof typeof CampaignQualificationType];

export const CampaignQualificationType = {
  min_token_amount: "min_token_amount",
} as const;
