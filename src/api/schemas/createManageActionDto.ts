import type { ActionArgumentsDto } from "./actionArgumentsDto";
import type { CreateManageActionDtoAction } from "./createManageActionDtoAction";

export interface CreateManageActionDto {
  /** Yield ID to perform the action on */
  yieldId: string;
  /** User wallet address */
  address: string;
  /** Arguments for the action */
  arguments?: ActionArgumentsDto;
  /** Pending action type (required for manage actions) */
  action: CreateManageActionDtoAction;
  /** Server-generated passthrough from the balances endpoint (required for manage actions) */
  passthrough: string;
}
