// @ts-check
import { defineConfig, envField, passthroughImageService } from "astro/config";
import sentry from "@sentry/astro";
import cloudflare from "@astrojs/cloudflare";
// https://astro.build/config


const SECRET_SENTRY_DSN = process.env.SECRET_SENTRY_DSN;
const SECRET_SENTRY_AUTH_TOKEN = process.env.SECRET_SENTRY_AUTH_TOKEN;

export default defineConfig({
  output: "server",
  
  image: {
    service: passthroughImageService()
  },

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

  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  site: "https://estadisticas.heramc.net",
  base: "/",
  vite: {
    logLevel: "error",
  },
});
