import type { AllocationDto } from "./allocationDto";
import type { CapacityDto } from "./capacityDto";
import type { ConcentratedLiquidityPoolStateDto } from "./concentratedLiquidityPoolStateDto";
import type { LiquidityStateDto } from "./liquidityStateDto";
import type { PricePerShareStateDto } from "./pricePerShareStateDto";

export interface YieldStateDto {
  /** Price per share state metadata */
  pricePerShareState?: PricePerShareStateDto;
  /** Concentrated liquidity pool state metadata */
  concentratedLiquidityPoolState?: ConcentratedLiquidityPoolStateDto;
  /** Capacity state metadata */
  capacityState?: CapacityDto;
  /** Liquidity state (available liquidity, utilization rate) */
  liquidityState?: LiquidityStateDto;
  /** Allocations to underlying strategies for vault yields (e.g., OAV, Morpho). Includes allocation, APY, TVL, and capacity per strategy. */
  allocations?: AllocationDto[];
}
