/**
 * Type of transaction operation
 */
export type TransactionDtoType =
  (typeof TransactionDtoType)[keyof typeof TransactionDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TransactionDtoType = {
  SWAP: "SWAP",
  DEPOSIT: "DEPOSIT",
  APPROVAL: "APPROVAL",
  STAKE: "STAKE",
  CLAIM_UNSTAKED: "CLAIM_UNSTAKED",
  CLAIM_REWARDS: "CLAIM_REWARDS",
  RESTAKE_REWARDS: "RESTAKE_REWARDS",
  UNSTAKE: "UNSTAKE",
  SPLIT: "SPLIT",
  MERGE: "MERGE",
  LOCK: "LOCK",
  UNLOCK: "UNLOCK",
  SUPPLY: "SUPPLY",
  BRIDGE: "BRIDGE",
  VOTE: "VOTE",
  REVOKE: "REVOKE",
  RESTAKE: "RESTAKE",
  REBOND: "REBOND",
  WITHDRAW: "WITHDRAW",
  WITHDRAW_ALL: "WITHDRAW_ALL",
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  REVEAL: "REVEAL",
  MIGRATE: "MIGRATE",
  DELEGATE: "DELEGATE",
  UNDELEGATE: "UNDELEGATE",
  UTXO_P_TO_C_IMPORT: "UTXO_P_TO_C_IMPORT",
  UTXO_C_TO_P_IMPORT: "UTXO_C_TO_P_IMPORT",
  WRAP: "WRAP",
  UNWRAP: "UNWRAP",
  UNFREEZE_LEGACY: "UNFREEZE_LEGACY",
  UNFREEZE_LEGACY_BANDWIDTH: "UNFREEZE_LEGACY_BANDWIDTH",
  UNFREEZE_LEGACY_ENERGY: "UNFREEZE_LEGACY_ENERGY",
  UNFREEZE_BANDWIDTH: "UNFREEZE_BANDWIDTH",
  UNFREEZE_ENERGY: "UNFREEZE_ENERGY",
  FREEZE_BANDWIDTH: "FREEZE_BANDWIDTH",
  FREEZE_ENERGY: "FREEZE_ENERGY",
  UNDELEGATE_BANDWIDTH: "UNDELEGATE_BANDWIDTH",
  UNDELEGATE_ENERGY: "UNDELEGATE_ENERGY",
  P2P_NODE_REQUEST: "P2P_NODE_REQUEST",
  CREATE_EIGENPOD: "CREATE_EIGENPOD",
  VERIFY_WITHDRAW_CREDENTIALS: "VERIFY_WITHDRAW_CREDENTIALS",
  START_CHECKPOINT: "START_CHECKPOINT",
  VERIFY_CHECKPOINT_PROOFS: "VERIFY_CHECKPOINT_PROOFS",
  QUEUE_WITHDRAWALS: "QUEUE_WITHDRAWALS",
  COMPLETE_QUEUED_WITHDRAWALS: "COMPLETE_QUEUED_WITHDRAWALS",
  LUGANODES_PROVISION: "LUGANODES_PROVISION",
  LUGANODES_EXIT_REQUEST: "LUGANODES_EXIT_REQUEST",
  INFSTONES_PROVISION: "INFSTONES_PROVISION",
  INFSTONES_EXIT_REQUEST: "INFSTONES_EXIT_REQUEST",
  INFSTONES_CLAIM_REQUEST: "INFSTONES_CLAIM_REQUEST",
} as const;
