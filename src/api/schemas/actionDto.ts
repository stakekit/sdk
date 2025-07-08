import type { ActionDtoExecutionPattern } from "./actionDtoExecutionPattern";
import type { ActionDtoIntent } from "./actionDtoIntent";
import type { ActionDtoRawArguments } from "./actionDtoRawArguments";
import type { ActionDtoStatus } from "./actionDtoStatus";
import type { ActionDtoType } from "./actionDtoType";
import type { TransactionDto } from "./transactionDto";

export interface ActionDto {
  /** Unique action identifier */
  id: string;
  /** High-level action intent */
  intent: ActionDtoIntent;
  /** Specific action type */
  type: ActionDtoType;
  /** Yield ID this action belongs to */
  yieldId: string;
  /** User wallet address */
  address: string;
  /**
   * Amount involved in the action
   * @nullable
   */
  amount: string | null;
  /**
   * Raw wei amount (full precision)
   * @nullable
   */
  amountRaw: string | null;
  /**
   * USD value of the amount
   * @nullable
   */
  amountUsd: string | null;
  /** Array of transactions for this action */
  transactions: TransactionDto[];
  /** Transaction execution pattern - synchronous (submit one by one, wait for each), asynchronous (submit all at once), or batch (single transaction with multiple operations) */
  executionPattern: ActionDtoExecutionPattern;
  /**
   * Raw arguments exactly as submitted by the user for this action
   * @nullable
   */
  rawArguments: ActionDtoRawArguments;
  /** When the action was created */
  createdAt: string;
  /**
   * When the action was completed
   * @nullable
   */
  completedAt: string | null;
  /** Current status of the action */
  status: ActionDtoStatus;
}
