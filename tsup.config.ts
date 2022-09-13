import { defineConfig } from "tsup";

export default defineConfig([
  {
    minify: true,
    dts: true,
    format: ["esm", "cjs"],
    sourcemap: true,
    clean: true,
    entry: ["src/index.tsx"],
    outDir: "dist",
  },
]);
