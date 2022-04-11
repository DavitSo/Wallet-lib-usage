'use strict';

const {Wallet} = require('wallet-lib');
require('./../src/network-settings');

const {createAddress} = require('./../src/create-address');

let address = '';
let wallet = null;
createAddress('').then((addr) => {
  address = addr;
  console.log('ADDRESS : ', address.toString());
  const options = {};
  wallet = new Wallet({...options,
    network: 'testnet',
    transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
  return wallet.getAccount();
}).then((acc) => {
  console.log(`Created new wallet with id: ${wallet.walletId} and mnemonic: ${wallet.mnemonic}. New account is ${acc}`);
})
    .catch((error) => console.log('Error details : ', error))
    .finally(() => wallet.disconnect());
