import type { TokenDto } from "./tokenDto";

export interface RewardEventDto {
  /** Timestamp of this reward event (ISO 8601) */
  timestamp: string;
  /** Block number when the reward was earned */
  blockNumber: number;
  /** Unique identifier of the yield */
  yieldId: string;
  /** Token metadata for the reward */
  token: TokenDto;
  /** Human-readable reward amount */
  amount: string;
  /** Raw reward amount in base units (wei) */
  amountRaw: string;
  /** Source of the reward derived from yield type */
  yieldSource: string;
  /**
   * Transaction hash where the reward was earned
   * @nullable
   */
  transactionHash?: string | null;
}
