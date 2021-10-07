'use strict';

const {Wallet} = require('wallet-lib');
const {Networks} = require('./src/network-settings');

const utils = require('src/utils');

// TODO Correct package.json file

// TODO change redis to secure/persistent storage
require('./src/init-secure-storage')().then(() => {
  // TODO
});


