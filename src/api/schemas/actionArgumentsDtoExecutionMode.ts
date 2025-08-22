/**
 * Transaction execution mode
 */
export type ActionArgumentsDtoExecutionMode =
  (typeof ActionArgumentsDtoExecutionMode)[keyof typeof ActionArgumentsDtoExecutionMode];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionArgumentsDtoExecutionMode = {
  individual: "individual",
  batched: "batched",
} as const;
