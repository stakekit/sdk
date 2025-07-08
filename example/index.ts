import { sdk } from "../src";

sdk.configure({ apiKey: "your-api-key" });

const main = async () => {
  const res = await sdk.api.yieldsGetYield("yieldId");

  console.log(res);
};

main();
