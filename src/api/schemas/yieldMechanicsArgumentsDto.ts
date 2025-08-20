import type { ArgumentSchemaDto } from "./argumentSchemaDto";
import type { YieldMechanicsArgumentsDtoManage } from "./yieldMechanicsArgumentsDtoManage";

export interface YieldMechanicsArgumentsDto {
  enter?: ArgumentSchemaDto;
  exit?: ArgumentSchemaDto;
  /** Manage action schemas. Each yield supports different ActionTypes (CLAIM_UNSTAKED, CLAIM_REWARDS, etc.). Keys are ActionTypes enum values. */
  manage?: YieldMechanicsArgumentsDtoManage;
  /** Arguments for the balances endpoint (e.g., alternative addresses, chain-specific fields) */
  balance?: ArgumentSchemaDto;
}
