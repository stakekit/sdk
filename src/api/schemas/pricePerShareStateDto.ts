import type { TokenDto } from "./tokenDto";

export interface PricePerShareStateDto {
  /** Price per share for the yield (e.g., LP token price, vault share price) */
  price: number;
  /** Share token (the token you own shares of) */
  shareToken: TokenDto;
  /** Quote token (the token the price is denominated in) */
  quoteToken: TokenDto;
}
