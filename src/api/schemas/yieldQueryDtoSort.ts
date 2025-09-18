/**
 * Sort by yield status
 */
export type YieldQueryDtoSort =
  (typeof YieldQueryDtoSort)[keyof typeof YieldQueryDtoSort];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldQueryDtoSort = {
  statusEnterAsc: "statusEnterAsc",
  statusEnterDesc: "statusEnterDesc",
  statusExitAsc: "statusExitAsc",
  statusExitDesc: "statusExitDesc",
} as const;
