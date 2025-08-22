import type { GetBalancesArgumentsDto } from "./getBalancesArgumentsDto";

export interface YieldBalancesRequestDto {
  /** User wallet address to check balances for */
  address: string;
  /** Optional arguments for advanced or protocol-specific balance queries */
  arguments?: GetBalancesArgumentsDto;
}
