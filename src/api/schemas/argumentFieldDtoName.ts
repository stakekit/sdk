/**
 * Field name
 */
export type ArgumentFieldDtoName =
  (typeof ArgumentFieldDtoName)[keyof typeof ArgumentFieldDtoName];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ArgumentFieldDtoName = {
  amount: "amount",
  amounts: "amounts",
  validatorAddress: "validatorAddress",
  validatorAddresses: "validatorAddresses",
  receiverAddress: "receiverAddress",
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
  useMaxAmount: "useMaxAmount",
  useInstantExecution: "useInstantExecution",
} as const;
