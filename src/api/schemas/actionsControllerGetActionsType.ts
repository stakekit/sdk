export type ActionsControllerGetActionsType =
  (typeof ActionsControllerGetActionsType)[keyof typeof ActionsControllerGetActionsType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionsControllerGetActionsType = {
  STAKE: "STAKE",
  UNSTAKE: "UNSTAKE",
  CLAIM_REWARDS: "CLAIM_REWARDS",
  RESTAKE_REWARDS: "RESTAKE_REWARDS",
  WITHDRAW: "WITHDRAW",
  WITHDRAW_ALL: "WITHDRAW_ALL",
  RESTAKE: "RESTAKE",
  CLAIM_UNSTAKED: "CLAIM_UNSTAKED",
  UNLOCK_LOCKED: "UNLOCK_LOCKED",
  STAKE_LOCKED: "STAKE_LOCKED",
  VOTE: "VOTE",
  REVOKE: "REVOKE",
  VOTE_LOCKED: "VOTE_LOCKED",
  REVOTE: "REVOTE",
  REBOND: "REBOND",
  MIGRATE: "MIGRATE",
  VERIFY_WITHDRAW_CREDENTIALS: "VERIFY_WITHDRAW_CREDENTIALS",
  DELEGATE: "DELEGATE",
} as const;
