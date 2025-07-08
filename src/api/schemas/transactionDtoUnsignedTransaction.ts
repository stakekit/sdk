import type { TransactionDtoUnsignedTransactionOneOf } from "./transactionDtoUnsignedTransactionOneOf";

/**
 * The unsigned transaction data to be signed by the wallet
 * @nullable
 */
export type TransactionDtoUnsignedTransaction =
  | string
  | TransactionDtoUnsignedTransactionOneOf
  | null;
