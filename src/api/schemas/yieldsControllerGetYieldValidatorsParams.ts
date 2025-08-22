export type YieldsControllerGetYieldValidatorsParams = {
  /**
   * Offset for pagination
   * @minimum 0
   */
  offset?: number;
  /**
   * Number of items per page
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * Filter by validator name (case-insensitive, partial match)
   */
  name?: string;
  /**
   * Filter by validator address
   */
  address?: string;
  /**
   * Filter by provider ID
   */
  provider?: string;
  /**
   * Filter by validator status
   */
  status?: string;
  /**
   * Filter by preferred flag
   */
  preferred?: boolean;
};
