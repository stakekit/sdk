import type { ArgumentFieldDtoDefault } from "./argumentFieldDtoDefault";
import type { ArgumentFieldDtoName } from "./argumentFieldDtoName";
import type { ArgumentFieldDtoType } from "./argumentFieldDtoType";

export interface ArgumentFieldDto {
  /** Field name */
  name: ArgumentFieldDtoName;
  /** Field type */
  type: ArgumentFieldDtoType;
  /** Field label */
  label: string;
  /** Field description */
  description?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Options for enum fields */
  options?: string[];
  /** Reference to API endpoint that provides options dynamically */
  optionsRef?: string;
  /** Default value for the field */
  default?: ArgumentFieldDtoDefault;
  /** Placeholder text for the field */
  placeholder?: string;
  /**
   * Minimum allowed value for number fields (null if no minimum)
   * @nullable
   */
  minimum?: string | null;
  /**
   * Maximum allowed value for number fields (null if no maximum)
   * @nullable
   */
  maximum?: string | null;
  /** Whether the field is an array */
  isArray?: boolean;
}
