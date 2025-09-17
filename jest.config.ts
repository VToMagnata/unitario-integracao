import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    // Mapear todos os imports que começam com @/lib/ para a pasta lib/
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
  },

  // Adicione esta linha para resolver imports de arquivos JSON
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
};

export default createJestConfig(config);
