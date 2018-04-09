'use strict';

var getAttrs = (attrs, lastPhrase, response) => {
  let newAttrs = attrs || {};
  if (lastPhrase) {
    newAttrs.lastPhrase = lastPhrase;
  }
  if (response) {
    newAttrs.context = response;
  }
  if (attrs.previousIntent) {
    delete newAttrs.previousIntent;
  }
  return newAttrs;
};

var getCard = (app, response) => {
  return {
    type: 'Standard',
    title: app.t('cardTitle'),
    text: app.t('cardContent', {response}),
    image: {
      smallImageUrl: 'https://www.leasingrechnen.at/icons/leasingrechner-banner_720x480.png',
      largeImageUrl: 'https://www.leasingrechnen.at/icons/leasingrechner-banner_1200x800.png'
    }
  };
};

module.exports = {
  getAttrs,
  getCard
};
