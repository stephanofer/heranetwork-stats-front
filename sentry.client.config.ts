import * as Sentry from "@sentry/astro";
import { SECRET_SENTRY_DSN } from "astro:env/client";

Sentry.init({
  dsn: SECRET_SENTRY_DSN,
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 0.1,
});
