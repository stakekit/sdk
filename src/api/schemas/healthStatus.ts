/**
 * The health status of the service
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const HealthStatus = {
  OK: "OK",
  FAIL: "FAIL",
} as const;
