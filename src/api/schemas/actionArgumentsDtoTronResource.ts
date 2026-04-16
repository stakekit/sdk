/**
 * Tron resource type for Tron staking
 */
export type ActionArgumentsDtoTronResource =
  (typeof ActionArgumentsDtoTronResource)[keyof typeof ActionArgumentsDtoTronResource];

export const ActionArgumentsDtoTronResource = {
  BANDWIDTH: "BANDWIDTH",
  ENERGY: "ENERGY",
} as const;
