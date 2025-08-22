import type { RevShareDetailsDto } from "./revShareDetailsDto";

export interface RevShareTiersDto {
  /** Trial tier revenue share details */
  trial?: RevShareDetailsDto;
  /** Standard tier revenue share details */
  standard?: RevShareDetailsDto;
  /** Pro tier revenue share details */
  pro?: RevShareDetailsDto;
}
