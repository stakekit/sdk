export interface GetBalancesArgumentsDto {
  /** Avalanche C-chain address */
  cAddressBech?: string;
  /** Avalanche P-chain address */
  pAddressBech?: string;
  /**
   * Day of month when auto-sweep window starts (used by Solana auto-sweep balance actions)
   * @minimum 1
   * @maximum 31
   */
  autoSweepDayOfMonth?: number;
  /** IANA timezone used to evaluate auto-sweep window day (e.g. Europe/London) */
  autoSweepTimezone?: string;
}
