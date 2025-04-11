// @ts-check
import { defineConfig, envField, passthroughImageService } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // image: {
  //   domains: ["render.crafty.gg"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**.crafty.gg",
  //     },
  //   ],
  // },
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      API_RPG: envField.string({ context: "server", access: "secret" }),
      API_SURVI: envField.string({ context: "server", access: "secret" }),
      API_PLAYERS_RPG: envField.string({ context: "server", access: "secret" }),
      API_PLAYERS_SURVI: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
