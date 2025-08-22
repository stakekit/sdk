import type { ActionArgumentsDtoExecutionMode } from "./actionArgumentsDtoExecutionMode";
import type { ActionArgumentsDtoTronResource } from "./actionArgumentsDtoTronResource";

export interface ActionArgumentsDto {
  /** Amount to stake/unstake */
  amount?: string;
  /** Validator address for single validator selection */
  validatorAddress?: string;
  /** Multiple validator addresses */
  validatorAddresses?: string[];
  /** Provider ID for Ethereum native staking */
  providerId?: string;
  /** Duration for Avalanche native staking (in seconds) */
  duration?: number;
  /** Token address for ERC-20 tokens, "0x" for native token, omit for canonical token */
  inputToken?: string;
  /** Subnet ID for Bittensor staking */
  subnetId?: number;
  /** Tron resource type for Tron staking */
  tronResource?: ActionArgumentsDtoTronResource;
  /** Fee configuration ID for custom fee settings */
  feeConfigurationId?: string;
  /** Cosmos public key for Cosmos staking */
  cosmosPubKey?: string;
  /** Tezos public key for Tezos staking */
  tezosPubKey?: string;
  /** Avalanche C-chain address */
  cAddressBech?: string;
  /** Avalanche P-chain address */
  pAddressBech?: string;
  /** Transaction execution mode */
  executionMode?: ActionArgumentsDtoExecutionMode;
  /** Transactions should have Ledger wallet API compatibility for hardware wallet users */
  ledgerWalletApiCompatible?: boolean;
}
