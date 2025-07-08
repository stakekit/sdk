import type { TransactionDtoAnnotatedTransaction } from "./transactionDtoAnnotatedTransaction";
import type { TransactionDtoNetwork } from "./transactionDtoNetwork";
import type { TransactionDtoStatus } from "./transactionDtoStatus";
import type { TransactionDtoStructuredTransaction } from "./transactionDtoStructuredTransaction";
import type { TransactionDtoType } from "./transactionDtoType";
import type { TransactionDtoUnsignedTransaction } from "./transactionDtoUnsignedTransaction";

export interface TransactionDto {
  /** Unique transaction identifier */
  id: string;
  /** Display title for the transaction */
  title: string;
  /** Network this transaction is for */
  network: TransactionDtoNetwork;
  /** Current status of the transaction */
  status: TransactionDtoStatus;
  /** Type of transaction operation */
  type: TransactionDtoType;
  /**
   * Transaction hash (available after broadcast)
   * @nullable
   */
  hash: string | null;
  /** When the transaction was created */
  createdAt: string;
  /**
   * When the transaction was broadcasted to the network
   * @nullable
   */
  broadcastedAt: string | null;
  /**
   * Signed transaction data (ready for broadcast)
   * @nullable
   */
  signedTransaction: string | null;
  /**
   * The unsigned transaction data to be signed by the wallet
   * @nullable
   */
  unsignedTransaction: TransactionDtoUnsignedTransaction;
  /**
   * Human-readable breakdown of the transaction for display purposes
   * @nullable
   */
  annotatedTransaction?: TransactionDtoAnnotatedTransaction;
  /**
   * Detailed transaction data for client-side validation or simulation
   * @nullable
   */
  structuredTransaction?: TransactionDtoStructuredTransaction;
  /** Zero-based index of the step in the action flow */
  stepIndex?: number;
  /** User-friendly description of what this transaction does */
  description?: string;
  /**
   * Error message if the transaction failed
   * @nullable
   */
  error?: string | null;
  /** Estimated gas cost for the transaction */
  gasEstimate?: string;
  /**
   * Link to the blockchain explorer for this transaction
   * @nullable
   */
  explorerUrl?: string | null;
  /** Whether this transaction is a message rather than a value transfer */
  isMessage?: boolean;
}
