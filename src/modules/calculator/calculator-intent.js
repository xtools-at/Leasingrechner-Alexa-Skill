'use strict';

const api = require('./calculator-service');

module.exports = app => {

  app.intent('CalculateQuick', (slots, attrs, data, done) => {
    if (!slots.price || typeof slots.price == 'undefined') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.price = slots.price;

        let newAttrs = attrs || {};

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            newAttrs.context = response;
            newAttrs.lastPhrase = app.t('text', {slots, response});
            done({
              text: app.t('text', {slots, response}),
              end: false,
              ssml: true,
              attrs: newAttrs,
              card: {
                title: app.t('cardTitle'),
                content: app.t('cardContent', {response}),
              }
            });
          } else {
            done({
              text: app.t('error'),
              ssml: true,
              end: false
            });
          }
      });
    }
  });

  app.intent('AdjustCapital', (slots, attrs, data, done) => {
    // check for price first
    if (!attrs.context || !attrs.context.price) {
      return {
        text: app.t('errorNoPrice'),
        ssml: true,
        end: false
      };
    }

    if (!slots.capital || typeof slots.capital == 'undefined') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.capital = slots.capital;

        let newAttrs = attrs || {};

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            newAttrs.context = response;
            newAttrs.lastPhrase = app.t('text', {slots, response});
            done({
              text: app.t('text', {slots, response}),
              ssml: true,
              end: false,
              attrs: newAttrs,
              card: {
                title: app.t('cardTitle'),
                content: app.t('cardContent', {response}),
              }
            });
          } else {
            done({
              text: app.t('error'),
              ssml: true,
              end: false
            });
          }
      });
    }
  });

  app.intent('AdjustTime', (slots, attrs, data, done) => {
    // check for price first
    if (!attrs.context || !attrs.context.price) {
      return {
        text: app.t('errorNoPrice'),
        ssml: true,
        end: false
      };
    }

    if (!slots.time || typeof slots.time == 'undefined') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.time = slots.time;

        let newAttrs = attrs || {};

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            newAttrs.context = response;
            newAttrs.lastPhrase = app.t('text', {slots, response});
            done({
              text: app.t('text', {slots, response}),
              ssml: true,
              end: false,
              attrs: newAttrs,
              card: {
                title: app.t('cardTitle'),
                content: app.t('cardContent', {response}),
              }
            });
          } else {
            done({
              text: app.t('error'),
              ssml: true,
              end: false
            });
          }
      });
    }
  });

  app.intent('AdjustResidualPercent', (slots, attrs, data, done) => {
    // check for price first
    if (!attrs.context || !attrs.context.price) {
      return {
        text: app.t('errorNoPrice'),
        ssml: true,
        end: false
      };
    }

    if (!slots.residual || typeof slots.residual == 'undefined') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.residual = slots.residual;

        let newAttrs = attrs || {};

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            newAttrs.context = response;
            newAttrs.lastPhrase = app.t('text', {slots, response});
            done({
              text: app.t('text', {slots, response}),
              ssml: true,
              end: false,
              attrs: newAttrs,
              card: {
                title: app.t('cardTitle'),
                content: app.t('cardContent', {response}),
              }
            });
          } else {
            done({
              text: app.t('error'),
              ssml: true,
              end: false
            });
          }
      });
    }
  });

};
