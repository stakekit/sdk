export interface YieldRequirementsDto {
  /** Whether off-chain KYC is required before transacting */
  kycRequired: boolean;
  /** Issuer's KYC portal URL */
  kycUrl?: string;
}
