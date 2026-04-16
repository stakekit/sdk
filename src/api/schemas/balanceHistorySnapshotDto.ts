import type { BalanceDto } from "./balanceDto";

export interface BalanceHistorySnapshotDto {
  /** Timestamp of this snapshot (ISO 8601) */
  timestamp: string;
  /** Block number closest to this snapshot */
  blockNumber: number;
  /** Unique identifier of the yield */
  yieldId: string;
  /** Balance entries at this point in time */
  balances: BalanceDto[];
}
