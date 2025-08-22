import type { ERCStandards } from "./eRCStandards";

export interface YieldMetadataDto {
  /** Display name of the yield opportunity */
  name: string;
  /** Yield opportunity logo URI */
  logoURI: string;
  /** Markdown-supported short description of this yield opportunity, including where rewards come from. */
  description: string;
  /** Link to documentation or integration guide */
  documentation: string;
  /** Whether this yield is currently under maintenance */
  underMaintenance: boolean;
  /** Whether this yield is deprecated and will be discontinued */
  deprecated: boolean;
  supportedStandards: ERCStandards[];
}
