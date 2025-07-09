import { sdk } from "../src";

sdk.configure({ apiKey: "your-api-key" });

const main = async () => {
  const res = await sdk.api.getYield("yieldId");

  console.log(res);
};

main();
