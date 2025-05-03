// @ts-check
import { defineConfig, envField } from "astro/config";

import node from "@astrojs/node";

import { loadEnv } from "vite";
import sentry from "@sentry/astro";

const {SECRET_SENTRY_AUTH_TOKEN, SECRET_SENTRY_DSN} = loadEnv(process.env.NODE_ENV || "", process.cwd(), '');


export default defineConfig({
  output: "server",
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

  integrations: [
    sentry({
      dsn: SECRET_SENTRY_DSN,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sourceMapsUploadOptions: {
        project: "heranetwork-page",
        authToken: SECRET_SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
