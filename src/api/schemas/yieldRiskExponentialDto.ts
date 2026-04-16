import type { YieldRiskExponentialDtoPoolRating } from "./yieldRiskExponentialDtoPoolRating";
import type { YieldRiskExponentialDtoPoolScore } from "./yieldRiskExponentialDtoPoolScore";
import type { YieldRiskExponentialDtoRatingDescription } from "./yieldRiskExponentialDtoRatingDescription";
import type { YieldRiskExponentialDtoUrl } from "./yieldRiskExponentialDtoUrl";

export interface YieldRiskExponentialDto {
  /** Exponential pool rating */
  poolRating?: YieldRiskExponentialDtoPoolRating;
  /** Exponential pool score (1-5) */
  poolScore?: YieldRiskExponentialDtoPoolScore;
  /** Exponential rating description */
  ratingDescription?: YieldRiskExponentialDtoRatingDescription;
  /** Exponential pool URL */
  url?: YieldRiskExponentialDtoUrl;
}
