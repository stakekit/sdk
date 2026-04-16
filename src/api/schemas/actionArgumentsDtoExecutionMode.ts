/**
 * Transaction execution mode
 */
export type ActionArgumentsDtoExecutionMode =
  (typeof ActionArgumentsDtoExecutionMode)[keyof typeof ActionArgumentsDtoExecutionMode];

export const ActionArgumentsDtoExecutionMode = {
  individual: "individual",
  batched: "batched",
} as const;
