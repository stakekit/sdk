export interface TvlSnapshotDto {
  /** Timestamp of this snapshot (ISO 8601) */
  timestamp: string;
  /** Total value locked in token units (human-readable) */
  tvl: string;
  /** Total value locked in smallest token unit (wei) */
  tvlRaw: string;
}
