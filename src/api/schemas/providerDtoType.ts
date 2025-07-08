/**
 * Type of provider (protocol or validator provider)
 */
export type ProviderDtoType =
  (typeof ProviderDtoType)[keyof typeof ProviderDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProviderDtoType = {
  protocol: "protocol",
  validator_provider: "validator_provider",
} as const;
