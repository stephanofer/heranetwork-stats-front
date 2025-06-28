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
      SECRET_SENTRY_DSN: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },

  integrations: [
    sentry({
      sourceMapsUploadOptions: {
        project: "heranetwork-page",
        authToken: SECRET_SENTRY_AUTH_TOKEN,
        telemetry: false
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
