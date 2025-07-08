import type { NetworkDtoCategory } from "./networkDtoCategory";
import type { NetworkDtoId } from "./networkDtoId";

export interface NetworkDto {
  /** The network identifier */
  id: NetworkDtoId;
  /** Human-readable display name of the network */
  name: string;
  /** The category of the network */
  category: NetworkDtoCategory;
  /** Logo URI for the network */
  logoURI: string;
}
