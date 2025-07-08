/**
 * Field type
 */
export type ArgumentFieldDtoType =
  (typeof ArgumentFieldDtoType)[keyof typeof ArgumentFieldDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ArgumentFieldDtoType = {
  string: "string",
  number: "number",
  address: "address",
  enum: "enum",
  boolean: "boolean",
} as const;
