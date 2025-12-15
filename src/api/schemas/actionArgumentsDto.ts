import type { ActionArgumentsDtoExecutionMode } from "./actionArgumentsDtoExecutionMode";
import type { ActionArgumentsDtoInputTokenNetwork } from "./actionArgumentsDtoInputTokenNetwork";
import type { ActionArgumentsDtoOutputTokenNetwork } from "./actionArgumentsDtoOutputTokenNetwork";
import type { ActionArgumentsDtoTronResource } from "./actionArgumentsDtoTronResource";

export interface ActionArgumentsDto {
  /** Amount to stake/unstake */
  amount?: string;
  /** Amounts to stake/unstake */
  amounts?: string[];
  /** Validator address for single validator selection */
  validatorAddress?: string;
  /** Multiple validator addresses */
  validatorAddresses?: string[];
  /** Provider ID for Ethereum native staking */
  providerId?: string;
  /** Duration for Avalanche native staking (in seconds) */
  duration?: number;
  /** Token for deposits. Use "0x" for native token or provide the token address. For cross-chain deposits, also provide inputTokenNetwork. */
  inputToken?: string;
  /** Network for the input token. Required for cross-chain deposits when the token is on a different network than the vault. */
  inputTokenNetwork?: ActionArgumentsDtoInputTokenNetwork;
  /** Token for withdrawals. Use "0x" for native token or provide the token address. For cross-chain withdrawals, also provide outputTokenNetwork. */
  outputToken?: string;
  /** Network for the output token. Required for cross-chain withdrawals when the destination is on a different network than the vault. */
  outputTokenNetwork?: ActionArgumentsDtoOutputTokenNetwork;
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
  /** Use max amount for ERC4626 withdraw */
  useMaxAmount?: boolean;
  /** Use instant execution for exit (faster but may have fees) */
  useInstantExecution?: boolean;
  /** Minimum price bound for concentrated liquidity pools (as decimal string). Must be non-negative (can be 0) and less than rangeMax. */
  rangeMin?: string;
  /** Maximum price bound for concentrated liquidity pools (as decimal string). Must be positive and greater than rangeMin. */
  rangeMax?: string;
  /**
   * Percentage of liquidity to exit (0-100). Required for partial exits from liquidity positions.
   * @minimum 0
   * @maximum 100
   */
  percentage?: number;
  /** NFT token ID for concentrated liquidity positions. Required for exiting specific positions. */
  tokenId?: string;
}
