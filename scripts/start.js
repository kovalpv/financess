/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require("chokidar");
const { build } = require("esbuild");
const liveServer = require("live-server");

(async () => {
  const builder = await build({
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["src/index.tsx"],
    incremental: true,
    minify: process.env.NODE_ENV === "production",
    // target: ["chrome58", "firefox57", "safari11", "edge16"],
    outfile: "public/app.js",
  });

  chokidar
    .watch(["src/**/*.{ts,tsx}", "src/**/*.{css}"], {
      interval: 0,
    })
    .on("all", () => {
      builder.rebuild();
    });
  liveServer.start({
    open: true,
    port: +process.env.PORT || 7000,
    root: "public",
  });
})();
