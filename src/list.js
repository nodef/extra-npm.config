'use strict';
const npmrc = require('@extra-npm/npmrc');
const ini = require('ini');


/**
 * Shows all the config settings.
 * @param {object} o options
 * @param {boolean} o.project get project config
 * @param {boolean} o.global get global config
 * @param {object} o.projectconfig path to project npmrc
 * @param {object} o.userconfig path to user npmrc
 * @param {object} o.globalconfig path to global npmrc
 * @returns {object}
 */
function list(o=null) {
  var rc = npmrc.read(opt);
  return ini.parse(rc);
}
module.exports = list;
