'use strict';

const {Wallet} = require('wallet-lib');
require('./../src/network-settings');

const utils = require('./../src/utils');
const {createAddress} = require('./../src/create-address');
const {PrivateKey} = require('@dashevo/dashcore-lib');

let address = '';
let wallet = null;
let account = null;
createAddress('').then((addr) => {
  address = addr;
  console.log('ADDRESS : ', address.toString());
  const options = {
    // autosave: false, // do not save state in storage,
    // rehydrate: false, // do not rehydrate from saved storage
    // injectDefaultPlugins: false, // don not subscribe to tx, chain and identity
  };
  wallet = new Wallet({...options, network: 'testnet', address: address,
    transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
  return wallet.getAccount();
}).then((acc) => {
  account = acc;

  const privateKey = utils.loadPrivateKey('');
  const pk = new PrivateKey(privateKey);
  return account.createTransaction({
    recipient: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
    satoshis: 1000000000,
    privateKeys: [pk],
  });
}).then((transaction) => {
  return account.broadcastTransaction(transaction);
})
    .then((d) => console.log('Transaction broadcast!\nTransaction ID:', d))
    .catch((error) => console.log('Error details : ', error))
    .finally(() => wallet.disconnect());

// TODO implement/discuss first time - from mnemonic, or load from storage and then create address from private key

