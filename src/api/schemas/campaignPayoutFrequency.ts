export type CampaignPayoutFrequency =
  (typeof CampaignPayoutFrequency)[keyof typeof CampaignPayoutFrequency];

export const CampaignPayoutFrequency = {
  weekly: "weekly",
  daily: "daily",
  six_hourly: "six_hourly",
  end_of_campaign: "end_of_campaign",
} as const;
