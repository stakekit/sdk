import type { ArgumentFieldDto } from "./argumentFieldDto";

export interface ArgumentSchemaDto {
  /** List of argument fields */
  fields: ArgumentFieldDto[];
  /** Notes or instructions for these arguments */
  notes?: string;
}
