'use strict';

const h = require('../helpers/helper');

module.exports = app => {

  app.builtInIntent('help', (slots, attrs, data) => {
    return {
      ssml: true,
      text: app.t('text'),
      end: false,
      attrs: h.getAttrs(attrs, app.t('text'))
    };
  });

  app.intent('MoreHelpIntent', () => {
    return {
      ssml: true,
      text: app.t('text'),
      end: true
    };
  });
};
