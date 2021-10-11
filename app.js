'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

const utils = require('src/utils');
const {createAddress} = require('./src/create-address');

// TODO Correct package.json file

const address = createAddress('');

const options = {};
// TODO implement/discuss first time - from mnemonic, or load from storage and then create address from private key
const wallet = new Wallet({...options, network: 'testnet', address: address});
utils.savePrivateKey('', wallet.pri)


