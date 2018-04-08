'use strict';

/**
 * Main Alexa app entry.
 * Global app configuration and all intent registering belongs here
 */

const alexia = require('alexia');
const app = alexia.createApp('Leasingrechner');
const i18next = require('i18next');
const FilesystemBackend = require('i18next-node-fs-backend');

// Initialize i18next internationalization
i18next
  .use(FilesystemBackend)
  .init({
    // debug: true,
    lng: 'de',
    fallbackLng: 'de',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json' // Path is relative to your current working directory - change it accordingly
    },
    preload: ['de'],
    ns: ['translation'] // List all namespaces so they are preloaded at startup
  });

app.setI18next(i18next);

/**
 * Register callback to be executed once app is started without any intent.
 * Example invocation: 'Alexa, start <my-app-name>'
 */
app.onStart(() => {
  return {
    text: app.t('text'),
    ssml: true,
    end: false
  };
});

/**
 * Register callback to be executed when app is being terminated.
 */
app.onEnd(() => {
  return {
    text: app.t('text'),
    ssml: true,
  };
});

// Register all intents matching specified pattern
app.registerIntents('src/modules/**/*-intent.js');

module.exports = app;
