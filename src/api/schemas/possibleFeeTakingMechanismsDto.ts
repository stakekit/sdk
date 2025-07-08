export interface PossibleFeeTakingMechanismsDto {
  /** User can take (earn) a deposit fee */
  depositFee: boolean;
  /** User can take (earn) a management fee */
  managementFee: boolean;
  /** User can take (earn) a performance fee */
  performanceFee: boolean;
  /** User can take (earn) validator rebates */
  validatorRebates: boolean;
}
