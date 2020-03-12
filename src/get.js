'use strict';
const list = require('./list');



function get(key, o=null) {
  var cfg = list(o);
  return cfg[key];
}
module.exports = get;
