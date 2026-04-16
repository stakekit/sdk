/**
 * Transaction execution pattern - synchronous (submit one by one, wait for each), asynchronous (submit all at once), or batch (single transaction with multiple operations)
 */
export type ActionDtoExecutionPattern =
  (typeof ActionDtoExecutionPattern)[keyof typeof ActionDtoExecutionPattern];

export const ActionDtoExecutionPattern = {
  synchronous: "synchronous",
  asynchronous: "asynchronous",
  batch: "batch",
} as const;
