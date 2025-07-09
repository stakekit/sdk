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
        transformer: (val) => {
          let operationName = val.operationName?.replace(/controller/i, "");

          // Remove redundant prefixes to clean up function names
          if (operationName) {
            operationName = operationName
              .replace(/^yields/i, "")
              .replace(/^actions/i, "")
              .replace(/^transactions/i, "")
              .replace(/^networks/i, "")
              .replace(/^providers/i, "")
              .replace(/^health/i, "");

            // Ensure the first letter is lowercase
            operationName =
              operationName.charAt(0).toLowerCase() + operationName.slice(1);

            // Handle special cases where removing prefix leaves empty or awkward names
            if (operationName === "health" || operationName === "") {
              operationName = "health";
            }
          }

          return {
            ...val,
            operationName,
          };
        },
      },
    },
    input: {
      target:
        "https://docs.yield.xyz/openapi/appsyield-apiswagger-docsopenapi.yaml",
    },
  },
});
