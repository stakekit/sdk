import type { PaginatedResponseDto } from "./paginatedResponseDto";
import type { YieldDto } from "./yieldDto";

export type YieldsControllerGetYields200 = PaginatedResponseDto & {
  items?: YieldDto[];
};
