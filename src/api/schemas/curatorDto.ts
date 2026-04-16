import type { CuratorDtoDescription } from "./curatorDtoDescription";
import type { CuratorDtoLogoURI } from "./curatorDtoLogoURI";
import type { CuratorDtoName } from "./curatorDtoName";

export interface CuratorDto {
  /**
   * Curator name
   * @nullable
   */
  name?: CuratorDtoName;
  /**
   * Curator description
   * @nullable
   */
  description?: CuratorDtoDescription;
  /**
   * Curator logo URI
   * @nullable
   */
  logoURI?: CuratorDtoLogoURI;
}
