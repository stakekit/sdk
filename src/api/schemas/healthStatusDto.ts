import type { HealthStatus } from "./healthStatus";

export interface HealthStatusDto {
  status: HealthStatus;
  /** Timestamp when the health check was performed */
  timestamp: string;
}
