'use strict';

const api = require('../calculator/calculator-service');
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
      let newAttrs = attrs || {};
      newAttrs.lastPhrase = app.t('textLeasingNo');
      return {
        text: app.t('textLeasingNo'),
        ssml: true,
        end: false,
        attrs: newAttrs
      };
    } else {
      return {
        text: '',
        end: true
      };
    }
  });

  app.builtInIntent('yes', (slots, attrs, data) => {
    if (attrs.previousIntent && calculateIntents.indexOf(attrs.previousIntent) !== -1) {
        // prepare call
      let call = attrs.context || {};
      call.link = true;

      let newAttrs = attrs || {};
      newAttrs.lastPhrase = app.t('textLeasingYes');

      // do call
      api.calculate(call, function (response) {
        if (response) {
          newAttrs.context = response;
          done({
            text: app.t('textLeasingYes'),
            ssml: true,
            end: true,
            attrs: newAttrs,
            card: {
              title: app.t('cardTitle'),
              content: app.t('cardContent', {response})
            }
          });
        } else {
          done({
            text: app.t('error'),
            ssml: true,
            end: true
          });
        }
      });
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
