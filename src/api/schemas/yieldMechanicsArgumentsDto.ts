import type { ArgumentSchemaDto } from "./argumentSchemaDto";
import type { YieldMechanicsArgumentsDtoManage } from "./yieldMechanicsArgumentsDtoManage";

export interface YieldMechanicsArgumentsDto {
  enter?: ArgumentSchemaDto;
  exit?: ArgumentSchemaDto;
  /** Arguments for manage sub-actions (claim, restake, etc.). Values are ArgumentSchemaDto objects. */
  manage?: YieldMechanicsArgumentsDtoManage;
  /** Arguments for the balances endpoint (e.g., alternative addresses, chain-specific fields) */
  balance?: ArgumentSchemaDto;
}
