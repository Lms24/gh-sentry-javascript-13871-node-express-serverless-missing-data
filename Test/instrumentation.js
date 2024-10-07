// import { expressIntegration, httpIntegration, init } from "@sentry/node";
const Sentry = require("@sentry/node");
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

console.log("instrumentation Sentry DSN: ", process.env.SENTRY_DSN);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: "development",

  integrations: [
    Sentry.httpIntegration({
      instrumentation: {
        requestHook: (span, req) => {
          console.log("xx", span, req);
        },
      },
    }),
    Sentry.expressIntegration(),
  ],

  tracesSampleRate: 1.0,
  // profilesSampleRate: 1.0,

  debug: true,

  beforeSendSpan(span) {
    console.log("beforeSendSpan span: ", span);
    return span;
  },

  beforeSendTransaction(transaction) {
    console.log("beforeSendTransaction transaction: ", transaction);
    return transaction;
  },

  beforeSend(event) {
    console.log("beforeSend event: ", event);
    return event;
  },
});
