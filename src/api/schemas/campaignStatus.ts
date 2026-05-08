export type CampaignStatus =
  (typeof CampaignStatus)[keyof typeof CampaignStatus];

export const CampaignStatus = {
  draft: "draft",
  active: "active",
  paused: "paused",
  ended: "ended",
} as const;
