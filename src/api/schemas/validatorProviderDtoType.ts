/**
 * Type of provider (protocol or validator provider)
 */
export type ValidatorProviderDtoType =
  (typeof ValidatorProviderDtoType)[keyof typeof ValidatorProviderDtoType];

export const ValidatorProviderDtoType = {
  protocol: "protocol",
  validator_provider: "validator_provider",
} as const;
