export interface CapacityDto {
  /** Current total assets in the yield */
  current: string;
  /**
   * Maximum capacity of the yield
   * @nullable
   */
  max?: string | null;
  /**
   * Remaining capacity available for deposits
   * @nullable
   */
  remaining?: string | null;
}
