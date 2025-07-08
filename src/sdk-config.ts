export type FetchInstance = <T>(input: string, init: RequestInit) => Promise<T>;

export type SDKConfig = {
  apiKey: string;
  baseURL?: string;
  fetchInstance?: FetchInstance;
};

export const sdkConfig: SDKConfig = {
  apiKey: "",
};
