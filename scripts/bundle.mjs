import { build } from "esbuild";

const shared = {
  bundle: true,
  format: "esm",
  external: ["astral-core"],
  sourcemap: true,
  logLevel: "info",
};

await build({
  ...shared,
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  platform: "node",
  target: "node22",
});

await build({
  ...shared,
  entryPoints: ["src/web.ts"],
  outfile: "dist/web.js",
  platform: "browser",
  target: "es2023",
});
