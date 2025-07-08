/**
 * Type of balance
 */
export type BalanceType = (typeof BalanceType)[keyof typeof BalanceType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BalanceType = {
  active: "active",
  entering: "entering",
  exiting: "exiting",
  withdrawable: "withdrawable",
  claimable: "claimable",
  locked: "locked",
} as const;
