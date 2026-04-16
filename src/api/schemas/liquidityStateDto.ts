import type { LiquidityStateDtoLiquidity } from "./liquidityStateDtoLiquidity";
import type { LiquidityStateDtoUtilization } from "./liquidityStateDtoUtilization";

export interface LiquidityStateDto {
  /**
   * Available liquidity in underlying token units
   * @nullable
   */
  liquidity?: LiquidityStateDtoLiquidity;
  /**
   * Utilization rate as a decimal (e.g., 0.8 = 80%)
   * @nullable
   */
  utilization?: LiquidityStateDtoUtilization;
}
