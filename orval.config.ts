import path from "node:path";
import { defineConfig } from "orval";

const apiPath = path.join(__dirname, "src", "api");

const schemasPath = path.join(apiPath, "schemas");
const indexPath = path.join(apiPath, "index.ts");
const apiClientPath = path.join(__dirname, "src", "api-client.ts");

export default defineConfig({
  api: {
    output: {
      mode: "split",
      target: indexPath,
      schemas: schemasPath,
      clean: true,
      mock: true,
      biome: true,
      override: {
        header: false,
        mutator: {
          path: apiClientPath,
          name: "customFetch",
        },
        transformer: (val) => ({
          ...val,
          operationName: val.operationName?.replace(/controller/i, ""),
        }),
      },
    },
    input: {
      target:
        "https://docs.yield.xyz/openapi/appsyield-apiswagger-docsopenapi.yaml",
    },
  },
});
