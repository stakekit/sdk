/**
 * The category of the network
 */
export type NetworkDtoCategory =
  (typeof NetworkDtoCategory)[keyof typeof NetworkDtoCategory];

export const NetworkDtoCategory = {
  evm: "evm",
  cosmos: "cosmos",
  substrate: "substrate",
  misc: "misc",
} as const;
