export interface YieldFeeDto {
  /** Deposit fee percentage */
  deposit?: string;
  /** Withdrawal fee percentage */
  withdrawal?: string;
  /** Management fee percentage (annual) */
  management?: string;
  /** Performance fee percentage */
  performance?: string;
}
