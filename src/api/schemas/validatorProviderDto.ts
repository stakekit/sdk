import type { RevShareTiersDto } from "./revShareTiersDto";

export interface ValidatorProviderDto {
  /** Provider display name */
  name: string;
  /** Unique identifier for the provider */
  uniqueId: string;
  /** Provider website URL */
  website: string;
  /** Provider ranking (lower numbers indicate higher preference) */
  rank: number;
  /** Whether this provider is marked as preferred */
  preferred: boolean;
  /** Revenue sharing details by tier */
  revshare?: RevShareTiersDto;
}
