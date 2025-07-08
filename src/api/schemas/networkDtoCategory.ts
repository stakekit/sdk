/**
 * The category of the network
 */
export type NetworkDtoCategory =
  (typeof NetworkDtoCategory)[keyof typeof NetworkDtoCategory];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const NetworkDtoCategory = {
  evm: "evm",
  cosmos: "cosmos",
  substrate: "substrate",
  misc: "misc",
} as const;
