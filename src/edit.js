'use strict';
const list = require('./list');
const npmrc = require('@extra-npm/npmrc');
const ini = require('ini');



/**
 * Modifies configuration settings.
 * @param {object} cfg configuration to modify
 * @param {object} o options
 * @param {boolean} o.project get project config
 * @param {boolean} o.global get global config
 * @param {object} o.projectconfig path to project npmrc
 * @param {object} o.userconfig path to user npmrc
 * @param {object} o.globalconfig path to global npmrc
 */
function edit(cfg, o = null) {
  cfg = Object.assign(list(o), cfg);
  var rc = ini.stringify(cfg);
  npmrc.write(rc, o);
}
module.exports = edit;
