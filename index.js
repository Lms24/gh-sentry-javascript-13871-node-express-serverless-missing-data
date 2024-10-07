import {init, setupExpressErrorHandler} from '@sentry/node';
import {nodeProfilingIntegration} from '@sentry/profiling-node';

init({
  dsn: process.env.SENTRY_DSN,
  environment: 'development',

  integrations: [nodeProfilingIntegration()],

  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/debug-sentry/:test', (req, res) => {
  throw new Error('My first Sentry error!');
});

setupExpressErrorHandler(app);

export const handler = serverless(app);
