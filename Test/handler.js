import { setupExpressErrorHandler } from "@sentry/node";

console.log("handler Sentry DSN: ", process.env.SENTRY_DSN);

import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/debug-sentry/:test", (req, res) => {
  throw new Error("My first Sentry error!");
});

setupExpressErrorHandler(app);

export const handler = serverless(app);
