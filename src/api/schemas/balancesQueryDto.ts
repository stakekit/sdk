import type { BalancesQueryDtoArguments } from "./balancesQueryDtoArguments";
import type { Networks } from "./networks";

export interface BalancesQueryDto {
  /** The unique identifier of the yield (optional for chain scanning) */
  yieldId?: string;
  /** User wallet address to check balances for */
  address: string;
  network: Networks;
  /** Custom arguments for advanced or protocol-specific balance queries. Should be a JSON object with custom parameters. See the yield mechanics.arguments.balance schema for details. */
  arguments?: BalancesQueryDtoArguments;
}
