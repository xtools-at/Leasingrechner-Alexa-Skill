'use strict';

const api = require('../calculator/calculator-service');
const h = require('../helpers/helper');

module.exports = app => {

  app.intent('CalculateQuick', (slots, attrs, data, done) => {
    if (!slots.price || typeof slots.price == 'undefined' || slots.price === '?') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.price = slots.price;

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            done({
              text: app.t('text', {slots, response}),
              end: false,
              ssml: true,
              attrs: h.getAttrs(attrs, app.t('text', {slots, response}), response),
              card: h.getCard(app, response)
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

    if (!slots.capital || typeof slots.capital == 'undefined' || slots.capital === '?') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.capital = slots.capital;

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            done({
              text: app.t('text', {slots, response}),
              ssml: true,
              end: false,
              attrs: h.getAttrs(attrs, app.t('text', {slots, response}), response),
              card: h.getCard(app, response)
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

    if (!slots.time || typeof slots.time == 'undefined'  || slots.time === '?') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.time = slots.time;

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            done({
              text: app.t('text', {slots, response}),
              ssml: true,
              end: false,
              attrs: h.getAttrs(attrs, app.t('text', {slots, response}), response),
              card: h.getCard(app, response)
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

    if (!slots.residual || typeof slots.residual == 'undefined' || slots.residual === '?') {
        done({
          text: app.t('errorInputMissing'),
          end: false
        });
    } else {
        // prepare call
        let call = attrs.context || {};
        call.residual = slots.residual;

        // do call
        api.calculate(call, function (response) {
          if (response && !response.error) {
            done({
              text: app.t('text', {slots, response}),
              ssml: true,
              end: false,
              attrs: h.getAttrs(attrs, app.t('text', {slots, response}), response),
              card: h.getCard(app, response)
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
