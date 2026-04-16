import type { PaginatedResponseDto } from "./paginatedResponseDto";
import type { ProviderDto } from "./providerDto";

export type ProvidersControllerGetProviders200 = PaginatedResponseDto & {
  items?: ProviderDto[];
};
