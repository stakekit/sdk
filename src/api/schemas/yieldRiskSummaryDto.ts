import type { YieldRiskEntryDto } from "./yieldRiskEntryDto";

export interface YieldRiskSummaryDto {
  /** Top-level rating entries by provider */
  ratings: YieldRiskEntryDto[];
}
