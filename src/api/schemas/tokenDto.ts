import type { TokenDtoNetwork } from "./tokenDtoNetwork";

export interface TokenDto {
  /** Token symbol */
  symbol: string;
  /** Token name */
  name: string;
  /** Token decimal places */
  decimals: number;
  /** Token network */
  network: TokenDtoNetwork;
  /** Token address (if applicable) */
  address?: string;
  /** Token logo URI */
  logoURI?: string;
  /** Token is points */
  isPoints?: boolean;
  /** Token CoinGecko ID */
  coinGeckoId?: string;
}
