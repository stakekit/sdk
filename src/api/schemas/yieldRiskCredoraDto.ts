import type { YieldRiskCredoraDtoCurator } from "./yieldRiskCredoraDtoCurator";
import type { YieldRiskCredoraDtoPsl } from "./yieldRiskCredoraDtoPsl";
import type { YieldRiskCredoraDtoPublishDate } from "./yieldRiskCredoraDtoPublishDate";
import type { YieldRiskCredoraDtoRating } from "./yieldRiskCredoraDtoRating";
import type { YieldRiskCredoraDtoScore } from "./yieldRiskCredoraDtoScore";

export interface YieldRiskCredoraDto {
  /** Credora rating */
  rating?: YieldRiskCredoraDtoRating;
  /** Credora score (1-5) */
  score?: YieldRiskCredoraDtoScore;
  /** Probability of Significant Loss (annualized) */
  psl?: YieldRiskCredoraDtoPsl;
  /** Credora publish date */
  publishDate?: YieldRiskCredoraDtoPublishDate;
  /** Credora curator name */
  curator?: YieldRiskCredoraDtoCurator;
}
