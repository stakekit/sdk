import type { BalanceHistorySnapshotDto } from "./balanceHistorySnapshotDto";
import type { PaginatedResponseDto } from "./paginatedResponseDto";

export type YieldsControllerGetBalanceHistory200 = PaginatedResponseDto & {
  items?: BalanceHistorySnapshotDto[];
};
