export interface YieldEntryLimitsDto {
  /**
   * Minimum amount required to enter this yield in token units (null if no minimum)
   * @nullable
   */
  minimum: string | null;
  /**
   * Maximum amount allowed to enter this yield in token units (null if no limit)
   * @nullable
   */
  maximum: string | null;
}
