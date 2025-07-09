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
  TransactionDto,
  YieldBalancesDto,
  YieldDto,
  YieldsControllerGetYieldBalancesParams,
  YieldsControllerGetYields200,
  YieldsControllerGetYieldsParams,
  YieldsControllerGetYieldValidators200,
  YieldsControllerGetYieldValidatorsParams,
} from "./schemas";

/**
 * Retrieve a paginated list of available yield opportunities across all supported networks and protocols.
 * @summary List all yield opportunities
 */
export const getYields = (params?: YieldsControllerGetYieldsParams) => {
  return customFetch<YieldsControllerGetYields200>({
    url: `/v1/yields`,
    method: "GET",
    params,
  });
};

/**
 * Retrieve balances for multiple wallet addresses across different networks and yield opportunities. Send an array of balance requests - each request can specify a yieldId (optional for chain scanning), address, network, and custom arguments. This is the same format as the single yield balance endpoint but in array form. Duplicate requests (same yieldId + address + network) are automatically deduplicated, with specific yield requests taking precedence over chain scans.
 * @summary Get balances across multiple yields and networks
 */
export const getAggregateBalances = (
  balancesRequestDto: BalancesRequestDto,
) => {
  return customFetch<BalancesResponseDto>({
    url: `/v1/yields/balances`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: balancesRequestDto,
  });
};

/**
 * Retrieve detailed information about a specific yield opportunity including APY, tokens, protocol details, and more.
 * @summary Get yield metadata
 */
export const getYield = (yieldId: string) => {
  return customFetch<YieldDto>({ url: `/v1/yields/${yieldId}`, method: "GET" });
};

/**
 * Retrieve all balances associated with a yield position for a specific wallet address, including active, pending, claimable, and withdrawable balances. The network is automatically determined from the yield configuration.
 * @summary Get balances for a specific yield and address
 */
export const getYieldBalances = (
  yieldId: string,
  params: YieldsControllerGetYieldBalancesParams,
) => {
  return customFetch<YieldBalancesDto>({
    url: `/v1/yields/${yieldId}/balances`,
    method: "GET",
    params,
  });
};

/**
 * Retrieve a paginated list of validators available for staking or delegation for this yield opportunity.
 * @summary Get yield validators
 */
export const getYieldValidators = (
  yieldId: string,
  params?: YieldsControllerGetYieldValidatorsParams,
) => {
  return customFetch<YieldsControllerGetYieldValidators200>({
    url: `/v1/yields/${yieldId}/validators`,
    method: "GET",
    params,
  });
};

/**
 * Retrieve all actions performed by a user, with optional filtering by yield, status, category, etc. In the future, this may include personalized action recommendations.
 * @summary Get user actions
 */
export const getActions = (params: ActionsControllerGetActionsParams) => {
  return customFetch<ActionsControllerGetActions200>({
    url: `/v1/actions`,
    method: "GET",
    params,
  });
};

/**
 * Retrieve detailed information about a specific action including current status, transactions, and execution details.
 * @summary Get action details
 */
export const getAction = (actionId: string) => {
  return customFetch<ActionDto>({
    url: `/v1/actions/${actionId}`,
    method: "GET",
  });
};

/**
 * Generate the transactions needed to enter a yield position with the provided parameters.
 * @summary Enter a yield
 */
export const enterYield = (createActionDto: CreateActionDto) => {
  return customFetch<ActionDto>({
    url: `/v1/actions/enter`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createActionDto,
  });
};

/**
 * Generate the transactions needed to exit a yield position with the provided parameters.
 * @summary Exit a yield
 */
export const exitYield = (createActionDto: CreateActionDto) => {
  return customFetch<ActionDto>({
    url: `/v1/actions/exit`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createActionDto,
  });
};

/**
 * Generate the transactions needed to perform management actions on a yield position.
 * @summary Manage a yield
 */
export const manageYield = (createManageActionDto: CreateManageActionDto) => {
  return customFetch<ActionDto>({
    url: `/v1/actions/manage`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createManageActionDto,
  });
};

/**
 * Submit the transaction hash after broadcasting a transaction to the blockchain. This updates the transaction status and enables tracking.
 * @summary Submit transaction hash
 */
export const submitTransactionHash = (
  transactionId: string,
  submitHashDto: SubmitHashDto,
) => {
  return customFetch<TransactionDto>({
    url: `/v1/transactions/${transactionId}/submit-hash`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: submitHashDto,
  });
};

/**
 * Retrieve detailed information about a specific transaction including current status, hash, and execution details.
 * @summary Get transaction details
 */
export const getTransaction = (transactionId: string) => {
  return customFetch<TransactionDto>({
    url: `/v1/transactions/${transactionId}`,
    method: "GET",
  });
};

/**
 * Retrieve a list of all supported networks that can be used for filtering yields and other operations.
 * @summary List all available networks
 */
export const getNetworks = () => {
  return customFetch<NetworkDto[]>({ url: `/v1/networks`, method: "GET" });
};

/**
 * Returns a paginated list of all providers, including both protocol and validator providers.
 * @summary Get all providers
 */
export const getProviders = (
  params?: ProvidersControllerGetProvidersParams,
) => {
  return customFetch<ProvidersControllerGetProviders200>({
    url: `/v1/providers`,
    method: "GET",
    params,
  });
};

/**
 * Returns detailed information about a specific provider.
 * @summary Get provider by ID
 */
export const getProvider = (providerId: string) => {
  return customFetch<ProviderDto>({
    url: `/v1/providers/${providerId}`,
    method: "GET",
  });
};

/**
 * Get the health status of the yield API with current timestamp
 * @summary Health check
 */
export const health = () => {
  return customFetch<HealthStatusDto>({ url: `/health`, method: "GET" });
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
