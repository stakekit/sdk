import type { ActionsQueryDtoIntent } from "./actionsQueryDtoIntent";
import type { ActionsQueryDtoNetwork } from "./actionsQueryDtoNetwork";
import type { ActionsQueryDtoStatus } from "./actionsQueryDtoStatus";
import type { ActionsQueryDtoStatusesItem } from "./actionsQueryDtoStatusesItem";
import type { ActionsQueryDtoType } from "./actionsQueryDtoType";

export interface ActionsQueryDto {
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
  /** User wallet address to filter actions for */
  address: string;
  /** Filter by action status */
  status?: ActionsQueryDtoStatus;
  /** Filter by multiple action statuses (supports CSV or repeated query params) */
  statuses?: ActionsQueryDtoStatusesItem[];
  /** Filter by action intent */
  intent?: ActionsQueryDtoIntent;
  /** Filter by action type */
  type?: ActionsQueryDtoType;
  /** Filter by yield ID */
  yieldId?: string;
  /** Filter by network */
  network?: ActionsQueryDtoNetwork;
}
