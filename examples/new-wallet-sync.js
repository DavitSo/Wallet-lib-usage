'use strict';

const {Wallet} = require('wallet-lib');
require('./../src/network-settings');


let wallet = null;
const options = {};
wallet = new Wallet({...options,
  network: 'testnet',
  transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
console.log(`Created new wallet with id: ${wallet.walletId} and mnemonic: ${wallet.mnemonic}`);
