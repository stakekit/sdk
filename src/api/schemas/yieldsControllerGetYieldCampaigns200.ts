import type { PaginatedResponseDto } from "./paginatedResponseDto";
import type { YieldCampaignDto } from "./yieldCampaignDto";

export type YieldsControllerGetYieldCampaigns200 = PaginatedResponseDto & {
  items?: YieldCampaignDto[];
};
