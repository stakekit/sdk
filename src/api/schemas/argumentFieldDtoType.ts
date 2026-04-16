/**
 * Field type
 */
export type ArgumentFieldDtoType =
  (typeof ArgumentFieldDtoType)[keyof typeof ArgumentFieldDtoType];

export const ArgumentFieldDtoType = {
  string: "string",
  number: "number",
  address: "address",
  enum: "enum",
  boolean: "boolean",
} as const;
