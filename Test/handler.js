// import { setupExpressErrorHandler } from "@sentry/node";

const Sentry = require("@sentry/node");

console.log("handler Sentry DSN: ", process.env.SENTRY_DSN);

// import express from "express";
// import serverless from "serverless-http";

const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/debug-sentry/:test", (req, res) => {
  throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);

module.exports.handler = serverless(app);
