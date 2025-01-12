// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8b7ece7cd894177f6657c3269f7d5049@o4508633214943232.ingest.us.sentry.io/4508633217695744",

  tracesSampleRate:1,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
