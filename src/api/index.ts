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
  ProviderDto,
  ProvidersControllerGetProviders200,
  ProvidersControllerGetProvidersParams,
  SubmitHashDto,
  SubmitTransactionDto,
  TransactionDto,
  YieldBalancesDto,
  YieldBalancesRequestDto,
  YieldDto,
  YieldsControllerGetYields200,
  YieldsControllerGetYieldsParams,
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
  transactionId: string,
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
  transactionId: string,
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
  transactionId: string,
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
export type GetYieldBalancesResult = NonNullable<
  Awaited<ReturnType<typeof getYieldBalances>>
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
