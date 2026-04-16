import type { Networks } from "./networks";
import type { RiskParameterDtoAsset } from "./riskParameterDtoAsset";
import type { RiskParameterDtoIntegrationId } from "./riskParameterDtoIntegrationId";
import type { RiskParameterDtoProtocol } from "./riskParameterDtoProtocol";
import type { RiskParameterDtoValue } from "./riskParameterDtoValue";

export interface RiskParameterDto {
  id: string;
  category: string;
  item: string;
  isDynamic: boolean;
  value?: RiskParameterDtoValue;
  network?: Networks;
  asset?: RiskParameterDtoAsset;
  protocol?: RiskParameterDtoProtocol;
  integrationId?: RiskParameterDtoIntegrationId;
  createdAt: string;
  updatedAt: string;
}
