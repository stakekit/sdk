import type { ActionDto } from "./actionDto";
import type { PaginatedResponseDto } from "./paginatedResponseDto";

export type ActionsControllerGetActions200 = PaginatedResponseDto & {
  items?: ActionDto[];
};
