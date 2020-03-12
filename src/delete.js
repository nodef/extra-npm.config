'use strict';
const edit = require('./edit');



/**
 * Deletes the key from all configuration files.
 * @param {string} key configuration key
 * @param {object} o options
 * @param {boolean} o.project get project config
 * @param {boolean} o.global get global config
 * @param {object} o.projectconfig path to project npmrc
 * @param {object} o.userconfig path to user npmrc
 * @param {object} o.globalconfig path to global npmrc
 */
function _delete(key, o = null) {
  var cfg = {};
  cfg[key] = undefined;
  edit(cfg, o);
}
module.exports = _delete;
