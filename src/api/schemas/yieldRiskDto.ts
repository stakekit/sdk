import type { YieldRiskCredoraDto } from "./yieldRiskCredoraDto";
import type { YieldRiskExponentialDto } from "./yieldRiskExponentialDto";

export interface YieldRiskDto {
  /** Risk data last update timestamp */
  updatedAt: string;
  exponentialFi?: YieldRiskExponentialDto;
  credora?: YieldRiskCredoraDto;
}
