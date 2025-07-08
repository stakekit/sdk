import type { ProviderDtoTvlUsd } from "./providerDtoTvlUsd";
import type { ProviderDtoType } from "./providerDtoType";

export interface ProviderDto {
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
  tvlUsd: ProviderDtoTvlUsd;
  /** Type of provider (protocol or validator provider) */
  type: ProviderDtoType;
  /**
   * Optional social/media references or audit links
   * @nullable
   */
  references?: string[] | null;
}
