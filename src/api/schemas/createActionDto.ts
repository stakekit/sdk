import type { ActionArgumentsDto } from "./actionArgumentsDto";

export interface CreateActionDto {
  /** Yield ID to perform the action on */
  yieldId: string;
  /** User wallet address */
  address: string;
  /** Arguments for the action */
  arguments?: ActionArgumentsDto;
}
