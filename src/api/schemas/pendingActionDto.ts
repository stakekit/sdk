import type { PendingActionDtoArguments } from "./pendingActionDtoArguments";
import type { PendingActionDtoIntent } from "./pendingActionDtoIntent";
import type { PendingActionDtoType } from "./pendingActionDtoType";

export interface PendingActionDto {
  /** High-level action intent */
  intent: PendingActionDtoIntent;
  /** Specific action type */
  type: PendingActionDtoType;
  /** Server-generated passthrough that must be included when executing the action */
  passthrough: string;
  /**
   * Argument schema required to execute this action
   * @nullable
   */
  arguments?: PendingActionDtoArguments;
}
