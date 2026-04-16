/**
 * How often rewards are distributed (e.g. continuously, epoch-based)
 */
export type RewardSchedule =
  (typeof RewardSchedule)[keyof typeof RewardSchedule];

export const RewardSchedule = {
  block: "block",
  hour: "hour",
  day: "day",
  week: "week",
  month: "month",
  era: "era",
  epoch: "epoch",
  campaign: "campaign",
} as const;
