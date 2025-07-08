export type ProvidersControllerGetProvidersParams = {
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
};
