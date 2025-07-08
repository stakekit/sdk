export type YieldsControllerGetYieldBalancesParams = {
  /**
   * The user wallet address to check balances for (network is automatically determined by the yield)
   */
  address: string;
  /**
   * Custom arguments for advanced or protocol-specific balance queries. Should be a JSON object with custom parameters. See the yield mechanics.arguments.balance schema for details.
   */
  arguments?: string;
};
