export type YieldsControllerGetYieldBalancesLegacyParams = {
  /**
   * User wallet address to check balances for
   */
  address: string;
  /**
   * Custom arguments for advanced or protocol-specific balance queries. Should be a JSON object with custom parameters.
   */
  arguments?: string;
};
