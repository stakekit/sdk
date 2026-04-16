import { customFetch } from "../api-client";
import type {
  ActionDto,
  ActionsControllerGetActions200,
  ActionsControllerGetActionsParams,
  BalancesRequestDto,
  BalancesResponseDto,
  CreateActionDto,
  CreateManageActionDto,
  HealthStatusDto,
  NetworkDto,
  PaginatedResponseDto,
  ProviderDto,
  ProvidersControllerGetProviders200,
  ProvidersControllerGetProvidersParams,
  RewardRateHistoryResponseDto,
  RiskParameterDto,
  SubmitHashDto,
  SubmitTransactionDto,
  TransactionDto,
  TvlHistoryResponseDto,
  YieldBalancesDto,
  YieldBalancesRequestDto,
  YieldDto,
  YieldsControllerGetBalanceHistory200,
  YieldsControllerGetBalanceHistoryParams,
  YieldsControllerGetYieldRewardRateHistoryParams,
  YieldsControllerGetYieldRewardsParams,
  YieldsControllerGetYields200,
  YieldsControllerGetYieldsParams,
  YieldsControllerGetYieldTvlHistoryParams,
  YieldsControllerGetYieldValidators200,
  YieldsControllerGetYieldValidatorsParams,
} from "./schemas";

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];

/**
 * Retrieve a paginated list of available yield opportunities across all supported networks and protocols.
 * @summary List all yield opportunities
 */
export const getYields = (
  params?: YieldsControllerGetYieldsParams,
  options?: SecondParameter<typeof customFetch<YieldsControllerGetYields200>>,
) => {
  return customFetch<YieldsControllerGetYields200>(
    { url: `/v1/yields`, method: "GET", params },
    options,
  );
};

/**
 * Retrieve balances for multiple wallet addresses across different networks and yield opportunities. Send an array of balance requests - each request can specify a yieldId (optional for chain scanning), address, network, and custom arguments. This is the same format as the single yield balance endpoint but in array form. Duplicate requests (same yieldId + address + network) are automatically deduplicated, with specific yield requests taking precedence over chain scans.
 * @summary Get balances across multiple yields and networks
 */
export const getAggregateBalances = (
  balancesRequestDto: BalancesRequestDto,
  options?: SecondParameter<typeof customFetch<BalancesResponseDto>>,
) => {
  return customFetch<BalancesResponseDto>(
    {
      url: `/v1/yields/balances`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: balancesRequestDto,
    },
    options,
  );
};

/**
 * Retrieve detailed information about a specific yield opportunity including APY, tokens, protocol details, and more.
 * @summary Get yield metadata
 */
export const getYield = (
  yieldId: string,
  options?: SecondParameter<typeof customFetch<YieldDto>>,
) => {
  return customFetch<YieldDto>(
    { url: `/v1/yields/${yieldId}`, method: "GET" },
    options,
  );
};

/**
 * Retrieve risk metadata associated with a specific yield.
 * @summary Get risk metadata for a yield
 */
export const getYieldRisk = (
  yieldId: string,
  options?: SecondParameter<typeof customFetch<RiskParameterDto[]>>,
) => {
  return customFetch<RiskParameterDto[]>(
    { url: `/v1/yields/${yieldId}/risk`, method: "GET" },
    options,
  );
};

/**
 * Returns a chronological time series of balance snapshots for a wallet address within a yield. Each entry reflects the position at a specific timestamp or block. Supports configurable sampling intervals and point-in-time queries. Only available for ERC4626 vaults with indexed transfer history.
 * @summary Get historical balance snapshots for a yield
 */
export const getBalanceHistory = (
  yieldId: string,
  params: YieldsControllerGetBalanceHistoryParams,
  options?: SecondParameter<
    typeof customFetch<YieldsControllerGetBalanceHistory200>
  >,
) => {
  return customFetch<YieldsControllerGetBalanceHistory200>(
    { url: `/v1/yields/${yieldId}/balances/history`, method: "GET", params },
    options,
  );
};

/**
 * Retrieve all balances associated with a yield opportunity for a specific wallet address, including active, pending, claimable, and withdrawable balances. The network is automatically determined from the yield configuration.
 * @summary Get balances for a specific yield
 */
export const getYieldBalances = (
  yieldId: string,
  yieldBalancesRequestDto: YieldBalancesRequestDto,
  options?: SecondParameter<typeof customFetch<YieldBalancesDto>>,
) => {
  return customFetch<YieldBalancesDto>(
    {
      url: `/v1/yields/${yieldId}/balances`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: yieldBalancesRequestDto,
    },
    options,
  );
};

/**
 * Retrieve a chronological list of on-chain reward events for an indexed yield. Each record includes timestamp, token metadata, amount, reward source, and transaction reference.
 * @summary Get reward history
 */
export const getYieldRewards = (
  yieldId: string,
  params: YieldsControllerGetYieldRewardsParams,
  options?: SecondParameter<typeof customFetch<PaginatedResponseDto>>,
) => {
  return customFetch<PaginatedResponseDto>(
    { url: `/v1/yields/${yieldId}/rewards/history`, method: "GET", params },
    options,
  );
};

/**
 * Returns a chronological time series of reward rate snapshots for the specified yield, suitable for charting and analytics. Supports configurable time ranges, sampling intervals (day/week/month), and pagination.
 * @summary Get historical reward rate snapshots for a yield
 */
export const getYieldRewardRateHistory = (
  yieldId: string,
  params?: YieldsControllerGetYieldRewardRateHistoryParams,
  options?: SecondParameter<typeof customFetch<RewardRateHistoryResponseDto>>,
) => {
  return customFetch<RewardRateHistoryResponseDto>(
    { url: `/v1/yields/${yieldId}/reward-rate/history`, method: "GET", params },
    options,
  );
};

/**
 * Returns a chronological time series of Total Value Locked for the specified yield, expressed in underlying token units. Supports configurable time ranges, sampling intervals (day/week/month), and pagination.
 * @summary Get historical TVL snapshots for a yield
 */
export const getYieldTvlHistory = (
  yieldId: string,
  params?: YieldsControllerGetYieldTvlHistoryParams,
  options?: SecondParameter<typeof customFetch<TvlHistoryResponseDto>>,
) => {
  return customFetch<TvlHistoryResponseDto>(
    { url: `/v1/yields/${yieldId}/tvl/history`, method: "GET", params },
    options,
  );
};

/**
 * Retrieve a paginated list of validators available for staking or delegation for this yield opportunity.
 * @summary Get yield validators
 */
export const getYieldValidators = (
  yieldId: string,
  params?: YieldsControllerGetYieldValidatorsParams,
  options?: SecondParameter<
    typeof customFetch<YieldsControllerGetYieldValidators200>
  >,
) => {
  return customFetch<YieldsControllerGetYieldValidators200>(
    { url: `/v1/yields/${yieldId}/validators`, method: "GET", params },
    options,
  );
};

/**
 * Retrieve all actions performed by a user, with optional filtering by yield, status, category, etc. In the future, this may include personalized action recommendations.
 * @summary Get user actions
 */
export const getActions = (
  params: ActionsControllerGetActionsParams,
  options?: SecondParameter<typeof customFetch<ActionsControllerGetActions200>>,
) => {
  return customFetch<ActionsControllerGetActions200>(
    { url: `/v1/actions`, method: "GET", params },
    options,
  );
};

/**
 * Retrieve detailed information about a specific action including current status, transactions, and execution details.
 * @summary Get action details
 */
export const getAction = (
  actionId: string,
  options?: SecondParameter<typeof customFetch<ActionDto>>,
) => {
  return customFetch<ActionDto>(
    { url: `/v1/actions/${actionId}`, method: "GET" },
    options,
  );
};

/**
 * Generate the transactions needed to enter a yield position with the provided parameters.
 * @summary Enter a yield
 */
export const enterYield = (
  createActionDto: CreateActionDto,
  options?: SecondParameter<typeof customFetch<ActionDto>>,
) => {
  return customFetch<ActionDto>(
    {
      url: `/v1/actions/enter`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createActionDto,
    },
    options,
  );
};

/**
 * Generate the transactions needed to exit a yield position with the provided parameters.
 * @summary Exit a yield
 */
export const exitYield = (
  createActionDto: CreateActionDto,
  options?: SecondParameter<typeof customFetch<ActionDto>>,
) => {
  return customFetch<ActionDto>(
    {
      url: `/v1/actions/exit`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createActionDto,
    },
    options,
  );
};

/**
 * Generate the transactions needed to perform management actions on a yield position.
 * @summary Manage a yield
 */
export const manageYield = (
  createManageActionDto: CreateManageActionDto,
  options?: SecondParameter<typeof customFetch<ActionDto>>,
) => {
  return customFetch<ActionDto>(
    {
      url: `/v1/actions/manage`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createManageActionDto,
    },
    options,
  );
};

/**
 * Submit the transaction hash after broadcasting a transaction to the blockchain. This updates the transaction status and enables tracking.
 * @summary Submit transaction hash
 */
export const submitTransactionHash = (
  transactionId: unknown,
  submitHashDto: SubmitHashDto,
  options?: SecondParameter<typeof customFetch<TransactionDto>>,
) => {
  return customFetch<TransactionDto>(
    {
      url: `/v1/transactions/${transactionId}/submit-hash`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: submitHashDto,
    },
    options,
  );
};

/**
 * Submit the transaction to the blockchain.
 * @summary Submit transaction
 */
export const submitTransaction = (
  transactionId: unknown,
  submitTransactionDto: SubmitTransactionDto,
  options?: SecondParameter<typeof customFetch<TransactionDto>>,
) => {
  return customFetch<TransactionDto>(
    {
      url: `/v1/transactions/${transactionId}/submit`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: submitTransactionDto,
    },
    options,
  );
};

/**
 * Retrieve detailed information about a specific transaction including current status, hash, and execution details.
 * @summary Get transaction details
 */
export const getTransaction = (
  transactionId: unknown,
  options?: SecondParameter<typeof customFetch<TransactionDto>>,
) => {
  return customFetch<TransactionDto>(
    { url: `/v1/transactions/${transactionId}`, method: "GET" },
    options,
  );
};

/**
 * Retrieve a list of all supported networks that can be used for filtering yields and other operations.
 * @summary List all available networks
 */
export const getNetworks = (
  options?: SecondParameter<typeof customFetch<NetworkDto[]>>,
) => {
  return customFetch<NetworkDto[]>(
    { url: `/v1/networks`, method: "GET" },
    options,
  );
};

/**
 * Returns a paginated list of all providers, including both protocol and validator providers.
 * @summary Get all providers
 */
export const getProviders = (
  params?: ProvidersControllerGetProvidersParams,
  options?: SecondParameter<
    typeof customFetch<ProvidersControllerGetProviders200>
  >,
) => {
  return customFetch<ProvidersControllerGetProviders200>(
    { url: `/v1/providers`, method: "GET", params },
    options,
  );
};

/**
 * Returns detailed information about a specific provider.
 * @summary Get provider by ID
 */
export const getProvider = (
  providerId: string,
  options?: SecondParameter<typeof customFetch<ProviderDto>>,
) => {
  return customFetch<ProviderDto>(
    { url: `/v1/providers/${providerId}`, method: "GET" },
    options,
  );
};

/**
 * Get the health status of the yield API with current timestamp
 * @summary Health check
 */
export const health = (
  options?: SecondParameter<typeof customFetch<HealthStatusDto>>,
) => {
  return customFetch<HealthStatusDto>(
    { url: `/health`, method: "GET" },
    options,
  );
};

export type GetYieldsResult = NonNullable<
  Awaited<ReturnType<typeof getYields>>
>;
export type GetAggregateBalancesResult = NonNullable<
  Awaited<ReturnType<typeof getAggregateBalances>>
>;
export type GetYieldResult = NonNullable<Awaited<ReturnType<typeof getYield>>>;
export type GetYieldRiskResult = NonNullable<
  Awaited<ReturnType<typeof getYieldRisk>>
>;
export type GetBalanceHistoryResult = NonNullable<
  Awaited<ReturnType<typeof getBalanceHistory>>
>;
export type GetYieldBalancesResult = NonNullable<
  Awaited<ReturnType<typeof getYieldBalances>>
>;
export type GetYieldRewardsResult = NonNullable<
  Awaited<ReturnType<typeof getYieldRewards>>
>;
export type GetYieldRewardRateHistoryResult = NonNullable<
  Awaited<ReturnType<typeof getYieldRewardRateHistory>>
>;
export type GetYieldTvlHistoryResult = NonNullable<
  Awaited<ReturnType<typeof getYieldTvlHistory>>
>;
export type GetYieldValidatorsResult = NonNullable<
  Awaited<ReturnType<typeof getYieldValidators>>
>;
export type GetActionsResult = NonNullable<
  Awaited<ReturnType<typeof getActions>>
>;
export type GetActionResult = NonNullable<
  Awaited<ReturnType<typeof getAction>>
>;
export type EnterYieldResult = NonNullable<
  Awaited<ReturnType<typeof enterYield>>
>;
export type ExitYieldResult = NonNullable<
  Awaited<ReturnType<typeof exitYield>>
>;
export type ManageYieldResult = NonNullable<
  Awaited<ReturnType<typeof manageYield>>
>;
export type SubmitTransactionHashResult = NonNullable<
  Awaited<ReturnType<typeof submitTransactionHash>>
>;
export type SubmitTransactionResult = NonNullable<
  Awaited<ReturnType<typeof submitTransaction>>
>;
export type GetTransactionResult = NonNullable<
  Awaited<ReturnType<typeof getTransaction>>
>;
export type GetNetworksResult = NonNullable<
  Awaited<ReturnType<typeof getNetworks>>
>;
export type GetProvidersResult = NonNullable<
  Awaited<ReturnType<typeof getProviders>>
>;
export type GetProviderResult = NonNullable<
  Awaited<ReturnType<typeof getProvider>>
>;
export type HealthResult = NonNullable<Awaited<ReturnType<typeof health>>>;
