import type { YieldRiskEntryDtoSource } from "./yieldRiskEntryDtoSource";

export interface YieldRiskEntryDto {
  /** Provider top-level rating value */
  rating: string;
  /** Provider source label */
  source: YieldRiskEntryDtoSource;
}
