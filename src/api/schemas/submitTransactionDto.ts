export interface SubmitTransactionDto {
  /** Encoded signed transaction to submit to the blockchain */
  signedTransaction: string;
}
