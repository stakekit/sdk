import type { CapacityDto } from "./capacityDto";
import type { ConcentratedLiquidityPoolStateDto } from "./concentratedLiquidityPoolStateDto";
import type { PricePerShareStateDto } from "./pricePerShareStateDto";

export interface YieldStateDto {
  /** Price per share state metadata */
  pricePerShareState?: PricePerShareStateDto;
  /** Concentrated liquidity pool state metadata */
  concentratedLiquidityPoolState?: ConcentratedLiquidityPoolStateDto;
  /** Capacity state metadata */
  capacityState?: CapacityDto;
}
