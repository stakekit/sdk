export interface YieldErrorDto {
  /** Unique identifier of the yield that failed */
  yieldId: string;
  /** Error message describing what went wrong */
  error: string;
}
