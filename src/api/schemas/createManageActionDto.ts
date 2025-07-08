import type { CreateManageActionDtoAction } from "./createManageActionDtoAction";
import type { CreateManageActionDtoArguments } from "./createManageActionDtoArguments";

export interface CreateManageActionDto {
  /** Yield ID to perform the action on */
  yieldId: string;
  /** User wallet address */
  address: string;
  /** Arguments for the action fields */
  arguments?: CreateManageActionDtoArguments;
  /** Pending action type (required for manage actions) */
  action: CreateManageActionDtoAction;
  /** Server-generated passthrough from the balances endpoint (required for manage actions) */
  passthrough: string;
}
