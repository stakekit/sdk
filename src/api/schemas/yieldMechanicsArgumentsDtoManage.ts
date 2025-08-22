import type { ArgumentSchemaDto } from "./argumentSchemaDto";

/**
 * Manage action schemas. Each yield supports different ActionTypes (CLAIM_UNSTAKED, CLAIM_REWARDS, etc.). Keys are ActionTypes enum values.
 */
export type YieldMechanicsArgumentsDtoManage = {
  [key: string]: ArgumentSchemaDto;
};
