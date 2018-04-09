'use strict';

var request = require('request');

var calculate = (calcObject, callback) => {

  var apiUrl = 'https://www.example.com/your-api';
  var apiToken = 'yourTokenHere';

  // call Leasingrechnen.at API
  request.post({
        url: apiUrl,
        body: calcObject,
        json: true,
        headers: {
            'Authorization': apiToken,
        }
      },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
            return callback(body);
          } else {
            return callback({error: true});
          }
      }
  );
};

module.exports = {
  calculate,
};
