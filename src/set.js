'use strict';
const edit = require('./edit');



function set(key, val, o=null) {
  var cfg = {};
  cfg[key] = val;
  edit(cfg, o);
}
module.exports = set;
