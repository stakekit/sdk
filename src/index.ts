import * as api from "./api";
import { type SDKConfig, sdkConfig } from "./sdk-config";

export * from "./api/schemas";
export type { FetchInstance, SDKConfig } from "./sdk-config";

export const sdk = {
  configure: (newConfig: SDKConfig) => {
    if (!newConfig.apiKey) {
      throw new Error("API key is required");
    }

    sdkConfig.apiKey = newConfig.apiKey;
    sdkConfig.baseURL = newConfig.baseURL;
    sdkConfig.fetchInstance = newConfig.fetchInstance;
  },

  api: new Proxy(api, {
    get(target, prop) {
      if (!sdkConfig.apiKey) {
        throw new Error(
          "SDK not configured. Please call sdk.configure(sdkConfig) with your API key before using the API.",
        );
      }

      return target[prop as keyof typeof target];
    },
  }),
};
