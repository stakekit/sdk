/**
 * Type of provider (protocol or validator provider)
 */
export type ProviderDtoType =
  (typeof ProviderDtoType)[keyof typeof ProviderDtoType];

export const ProviderDtoType = {
  protocol: "protocol",
  validator_provider: "validator_provider",
} as const;
