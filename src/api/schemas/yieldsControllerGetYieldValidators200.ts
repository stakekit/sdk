import type { PaginatedResponseDto } from "./paginatedResponseDto";
import type { ValidatorDto } from "./validatorDto";

export type YieldsControllerGetYieldValidators200 = PaginatedResponseDto & {
  items?: ValidatorDto[];
};
