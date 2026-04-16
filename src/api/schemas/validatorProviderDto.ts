import type { RevShareTiersDto } from "./revShareTiersDto";
import type { ValidatorProviderDtoTvlUsd } from "./validatorProviderDtoTvlUsd";
import type { ValidatorProviderDtoType } from "./validatorProviderDtoType";

export interface ValidatorProviderDto {
  /** Provider name */
  name: string;
  /** Provider ID */
  id: string;
  /** Provider logo URI */
  logoURI: string;
  /** Short description of the provider */
  description: string;
  /** Provider website */
  website: string;
  /**
   * Total TVL across the entire provider in USD
   * @nullable
   */
  tvlUsd: ValidatorProviderDtoTvlUsd;
  /** Type of provider (protocol or validator provider) */
  type: ValidatorProviderDtoType;
  /**
   * Optional social/media references or audit links
   * @nullable
   */
  references?: string[] | null;
  /** Provider ranking (lower numbers indicate higher preference) */
  rank: number;
  /** Whether this provider is marked as preferred */
  preferred: boolean;
  /** Revenue sharing details by tier */
  revshare?: RevShareTiersDto;
  /**
   * Provider ID (deprecated, use `id` instead)
   * @deprecated
   */
  uniqueId?: string;
  /**
   * Creation timestamp (deprecated)
   * @deprecated
   */
  createdAt?: string;
  /**
   * Last update timestamp (deprecated)
   * @deprecated
   */
  updatedAt?: string;
}
