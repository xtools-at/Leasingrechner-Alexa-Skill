'use strict';

// const api = require('../calculator/calculator-service');
const h = require('../helpers/helper');
const calculateIntents = ['CalculateQuick', 'AdjustTime', 'AdjustCapital', 'AdjustResidualPercent'];

module.exports = app => {

  app.builtInIntent('stop', () => {
    return {
      text: app.t('text'),
      ssml: true,
      end: true
    };
  });

  app.builtInIntent('cancel', () => {
    return {
      text: app.t('text'),
      ssml: true,
      end: true
    };
  });

  app.builtInIntent('no', (slots, attrs, data) => {
    if (attrs.previousIntent && calculateIntents.indexOf(attrs.previousIntent) !== -1) {
      return {
        text: app.t('textLeasingNo'),
        ssml: true,
        end: false,
        attrs: h.getAttrs(attrs, app.t('textLeasingNo'))
      };
    } else {
      return {
        text: '',
        end: true
      };
    }
  });

  app.builtInIntent('yes', (slots, attrs, data) => {
    if (attrs && attrs.previousIntent && calculateIntents.indexOf(attrs.previousIntent) !== -1) {
      // Alexa Cards do not support Links, so there's no point in fetching it. For reference:
      /*
      // prepare call
      let call = attrs.context || {};
      call.link = true;

      // do call
      api.calculate(call, function (response) {
        if (response && !response.error) {
          done({
            text: app.t('textLeasingYes'),
            ssml: true,
            end: true,
            card: h.getCard(app, response)
          });
        } else {
          done({
            text: app.t('error'),
            ssml: true,
            end: true
          });
        }
      });
      */

      return {
        text: app.t('textLeasingYes'),
        ssml: true,
        end: true
      };
    } else {
      return {
        text: '',
        end: true
      };
    }
  });

  app.builtInIntent('repeat', (slots, attrs, data) => {
    if (attrs.lastPhrase) {
      let ssml = (attrs.lastPhrase.indexOf('<speak>') !== -1);
      return {
        text: attrs.lastPhrase,
        ssml: ssml,
        end: false
      };
    } else {
      return {
        text: app.t('text'),
        ssml: true,
        end: false
      };
    }
  });

  app.builtInIntent('startOver', (slots, attrs, data) => {
    return {
      text: app.t('text'),
      ssml: true,
      end: false,
      attrs: {
        lastPhrase: app.t('text')
      }
    };
  });
};
