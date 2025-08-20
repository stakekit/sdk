/**
 * Tron resource type for Tron staking
 */
export type ActionArgumentsDtoTronResource =
  (typeof ActionArgumentsDtoTronResource)[keyof typeof ActionArgumentsDtoTronResource];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActionArgumentsDtoTronResource = {
  BANDWIDTH: "BANDWIDTH",
  ENERGY: "ENERGY",
} as const;
