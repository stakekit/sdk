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
export const yieldsGetYields = (params?: YieldsControllerGetYieldsParams) => {
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
export const yieldsGetAggregateBalances = (
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
export const yieldsGetYield = (yieldId: string) => {
  return customFetch<YieldDto>({ url: `/v1/yields/${yieldId}`, method: "GET" });
};

/**
 * Retrieve all balances associated with a yield position for a specific wallet address, including active, pending, claimable, and withdrawable balances. The network is automatically determined from the yield configuration.
 * @summary Get balances for a specific yield and address
 */
export const yieldsGetYieldBalances = (
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
export const yieldsGetYieldValidators = (
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
export const actionsGetActions = (
  params: ActionsControllerGetActionsParams,
) => {
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
export const actionsGetAction = (actionId: string) => {
  return customFetch<ActionDto>({
    url: `/v1/actions/${actionId}`,
    method: "GET",
  });
};

/**
 * Generate the transactions needed to enter a yield position with the provided parameters.
 * @summary Enter a yield
 */
export const actionsEnterYield = (createActionDto: CreateActionDto) => {
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
export const actionsExitYield = (createActionDto: CreateActionDto) => {
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
export const actionsManageYield = (
  createManageActionDto: CreateManageActionDto,
) => {
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
export const transactionsSubmitTransactionHash = (
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
export const transactionsGetTransaction = (transactionId: string) => {
  return customFetch<TransactionDto>({
    url: `/v1/transactions/${transactionId}`,
    method: "GET",
  });
};

/**
 * Retrieve a list of all supported networks that can be used for filtering yields and other operations.
 * @summary List all available networks
 */
export const networksGetNetworks = () => {
  return customFetch<NetworkDto[]>({ url: `/v1/networks`, method: "GET" });
};

/**
 * Returns a paginated list of all providers, including both protocol and validator providers.
 * @summary Get all providers
 */
export const providersGetProviders = (
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
export const providersGetProvider = (providerId: string) => {
  return customFetch<ProviderDto>({
    url: `/v1/providers/${providerId}`,
    method: "GET",
  });
};

/**
 * Get the health status of the yield API with current timestamp
 * @summary Health check
 */
export const healthHealth = () => {
  return customFetch<HealthStatusDto>({ url: `/health`, method: "GET" });
};

export type YieldsGetYieldsResult = NonNullable<
  Awaited<ReturnType<typeof yieldsGetYields>>
>;
export type YieldsGetAggregateBalancesResult = NonNullable<
  Awaited<ReturnType<typeof yieldsGetAggregateBalances>>
>;
export type YieldsGetYieldResult = NonNullable<
  Awaited<ReturnType<typeof yieldsGetYield>>
>;
export type YieldsGetYieldBalancesResult = NonNullable<
  Awaited<ReturnType<typeof yieldsGetYieldBalances>>
>;
export type YieldsGetYieldValidatorsResult = NonNullable<
  Awaited<ReturnType<typeof yieldsGetYieldValidators>>
>;
export type ActionsGetActionsResult = NonNullable<
  Awaited<ReturnType<typeof actionsGetActions>>
>;
export type ActionsGetActionResult = NonNullable<
  Awaited<ReturnType<typeof actionsGetAction>>
>;
export type ActionsEnterYieldResult = NonNullable<
  Awaited<ReturnType<typeof actionsEnterYield>>
>;
export type ActionsExitYieldResult = NonNullable<
  Awaited<ReturnType<typeof actionsExitYield>>
>;
export type ActionsManageYieldResult = NonNullable<
  Awaited<ReturnType<typeof actionsManageYield>>
>;
export type TransactionsSubmitTransactionHashResult = NonNullable<
  Awaited<ReturnType<typeof transactionsSubmitTransactionHash>>
>;
export type TransactionsGetTransactionResult = NonNullable<
  Awaited<ReturnType<typeof transactionsGetTransaction>>
>;
export type NetworksGetNetworksResult = NonNullable<
  Awaited<ReturnType<typeof networksGetNetworks>>
>;
export type ProvidersGetProvidersResult = NonNullable<
  Awaited<ReturnType<typeof providersGetProviders>>
>;
export type ProvidersGetProviderResult = NonNullable<
  Awaited<ReturnType<typeof providersGetProvider>>
>;
export type HealthHealthResult = NonNullable<
  Awaited<ReturnType<typeof healthHealth>>
>;
