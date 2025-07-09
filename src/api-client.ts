import { sdkConfig } from "./sdk-config";

export const customFetch = async <T>({
  url,
  method,
  params,
  headers,
  data,
  signal,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: unknown;
  data?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}): Promise<T> => {
  const {
    apiKey,
    baseURL = "https://api.yield.xyz/",
    fetchInstance,
  } = sdkConfig;

  const finalUrl = getUrl({ baseURL, path: url, params });

  const requestInit: RequestInit = {
    method,
    headers: { ...headers, "X-API-KEY": apiKey },
    signal,
    ...(!!data && { body: JSON.stringify(data) }),
  };

  if (fetchInstance) {
    return fetchInstance<T>(finalUrl, requestInit);
  }

  const response = await fetch(finalUrl, requestInit);

  if (response.ok) {
    return response.json() as Promise<T>;
  }

  return Promise.reject(response);
};

const getUrl = ({
  baseURL,
  path,
  params = {},
}: {
  baseURL: string;
  path: string;
  params?: unknown;
}): string => {
  const url = new URL(baseURL);
  url.pathname = path;

  const urlSearchParams = new URLSearchParams(params as Record<string, string>);

  url.search = urlSearchParams.toString();
  return url.toString();
};
