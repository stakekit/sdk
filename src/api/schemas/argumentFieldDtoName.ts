/**
 * Field name
 */
export type ArgumentFieldDtoName =
  (typeof ArgumentFieldDtoName)[keyof typeof ArgumentFieldDtoName];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ArgumentFieldDtoName = {
  amount: "amount",
  validatorAddress: "validatorAddress",
  validatorAddresses: "validatorAddresses",
  providerId: "providerId",
  duration: "duration",
  inputToken: "inputToken",
  subnetId: "subnetId",
  tronResource: "tronResource",
  feeConfigurationId: "feeConfigurationId",
  cosmosPubKey: "cosmosPubKey",
  tezosPubKey: "tezosPubKey",
  cAddressBech: "cAddressBech",
  pAddressBech: "pAddressBech",
  executionMode: "executionMode",
  ledgerWalletApiCompatible: "ledgerWalletApiCompatible",
} as const;
