const Promise = require('promise');
const DB = require('../db/index.js');
var Storage = new DB(process.env.storage);

module.exports = {
  handle: function(data){
    // TODO: save new availability status for station [Issue #15]
    return new Promise(function(resolve, reject) {
      resolve({
        status: 'Accepted'
      });
    });
  }
}
