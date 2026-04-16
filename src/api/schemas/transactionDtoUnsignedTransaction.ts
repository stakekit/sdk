/**
 * The unsigned transaction data to be signed by the wallet
 */
export type TransactionDtoUnsignedTransaction =
  | string
  | { [key: string]: unknown }
  | null;
