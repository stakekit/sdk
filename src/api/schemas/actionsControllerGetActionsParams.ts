import type { ActionsControllerGetActionsIntent } from "./actionsControllerGetActionsIntent";
import type { ActionsControllerGetActionsNetwork } from "./actionsControllerGetActionsNetwork";
import type { ActionsControllerGetActionsStatus } from "./actionsControllerGetActionsStatus";
import type { ActionsControllerGetActionsStatusesItem } from "./actionsControllerGetActionsStatusesItem";
import type { ActionsControllerGetActionsType } from "./actionsControllerGetActionsType";

export type ActionsControllerGetActionsParams = {
  /**
   * Offset for pagination
   * @minimum 0
   */
  offset?: number;
  /**
   * Maximum number of items to return
   * @minimum 1
   * @maximum 100
   */
  limit?: number;
  /**
   * User wallet address to get actions for
   */
  address: string;
  /**
   * Filter actions by status
   */
  status?: ActionsControllerGetActionsStatus;
  /**
   * Filter actions by multiple statuses (supports CSV or repeated query params)
   */
  statuses?: ActionsControllerGetActionsStatusesItem[];
  /**
   * Filter actions by intent
   */
  intent?: ActionsControllerGetActionsIntent;
  /**
   * Filter by action type
   */
  type?: ActionsControllerGetActionsType;
  /**
   * Filter actions by specific yield
   */
  yieldId?: string;
  /**
   * Filter by network
   */
  network?: ActionsControllerGetActionsNetwork;
};
