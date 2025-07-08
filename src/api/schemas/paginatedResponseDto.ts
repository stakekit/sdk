export interface PaginatedResponseDto {
  /** Total number of items available */
  total: number;
  /** Offset of the current page */
  offset: number;
  /** Limit of the current page */
  limit: number;
}
