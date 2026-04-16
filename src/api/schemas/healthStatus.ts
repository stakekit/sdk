/**
 * The health status of the service
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

export const HealthStatus = {
  OK: "OK",
  FAIL: "FAIL",
} as const;
