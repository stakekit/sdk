/**
 * Current status of the action
 */
export type ActionDtoStatus =
  (typeof ActionDtoStatus)[keyof typeof ActionDtoStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionDtoStatus = {
  CANCELED: "CANCELED",
  CREATED: "CREATED",
  WAITING_FOR_NEXT: "WAITING_FOR_NEXT",
  PROCESSING: "PROCESSING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  STALE: "STALE",
} as const;
