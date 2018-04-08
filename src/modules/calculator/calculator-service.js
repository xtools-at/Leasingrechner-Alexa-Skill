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
            // console.log('No Error');
            // console.log(response);
            return callback(body);
          } else {
            // console.log('Error');
            // console.log(error);
            // console.log(response);
            return callback({error: true});
          }
      }
  );
};

module.exports = {
  calculate,
};
