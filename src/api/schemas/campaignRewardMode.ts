export type CampaignRewardMode =
  (typeof CampaignRewardMode)[keyof typeof CampaignRewardMode];

export const CampaignRewardMode = {
  normal: "normal",
  compound: "compound",
} as const;
