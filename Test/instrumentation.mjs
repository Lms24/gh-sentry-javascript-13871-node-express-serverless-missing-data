import { init } from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

console.log("instrumentation Sentry DSN: ", process.env.SENTRY_DSN);

init({
  dsn: process.env.SENTRY_DSN,
  environment: "development",

  // integrations: [nodeProfilingIntegration()],

  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,

  debug: true,
  beforeSend(event) {
    console.log("beforeSend event: ", event);
    return event;
  },
});
