import path from "node:path";
import { defineConfig, type LibConfig } from "@rslib/core";

const baseLibConfig: LibConfig = {
  format: "esm",
  syntax: ["es2022"],
};

export default defineConfig({
  lib: [
    {
      ...baseLibConfig,
      dts: true,
      source: {
        entry: {
          index: path.join(__dirname, "src", "index.ts"),
        },
      },
    },
    {
      ...baseLibConfig,
      bundle: false,
      source: {
        entry: {
          "index.msw": path.join(__dirname, "src", "api", "index.msw.ts"),
        },
      },
    },
  ],
  source: {
    tsconfigPath: path.join(__dirname, "tsconfig.build.json"),
  },
  output: {
    cleanDistPath: true,
    target: "web",

    distPath: {
      root: "./dist",
    },
  },
});
