/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // read file at filepath
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      // split fileData string at '\n' char, return first element of result array
      callback(null, fileData.toString().split('\n')[0]);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // perform a get request
  request(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
  //  in successCB and errorCB, do callback with null, status code as arguments
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
