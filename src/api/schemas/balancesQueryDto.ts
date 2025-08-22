import type { GetBalancesArgumentsDto } from "./getBalancesArgumentsDto";
import type { Networks } from "./networks";

export interface BalancesQueryDto {
  /** The unique identifier of the yield (optional for chain scanning) */
  yieldId?: string;
  /** User wallet address to check balances for */
  address: string;
  network: Networks;
  /** Arguments for balance queries */
  arguments?: GetBalancesArgumentsDto;
}
