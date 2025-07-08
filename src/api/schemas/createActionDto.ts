import type { CreateActionDtoArguments } from "./createActionDtoArguments";

export interface CreateActionDto {
  /** Yield ID to perform the action on */
  yieldId: string;
  /** User wallet address */
  address: string;
  /** Arguments for the action fields */
  arguments?: CreateActionDtoArguments;
}
