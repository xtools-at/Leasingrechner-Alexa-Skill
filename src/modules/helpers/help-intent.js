'use strict';

module.exports = app => {

  app.builtInIntent('help', (slots, attrs, data) => {
    let newAttrs = attrs || {};
    newAttrs.lastPhrase = app.t('text');
    return {
      ssml: true,
      text: app.t('text'),
      end: false,
      attrs: newAttrs
    };
  });
  /*
  app.intent('MoreHelpIntent', () => {
    return {
      ssml: true,
      text: app.t('text'),
      end: true,
    };
  });
  */
};
