import type { CampaignStatus } from "./campaignStatus";

export type YieldsControllerGetYieldCampaignsParams = {
  /**
   * Offset for pagination
   * @minimum 0
   */
  offset?: number;
  /**
   * Maximum number of items to return
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Campaign status filter. Defaults to active.
   */
  status?: CampaignStatus;
};
