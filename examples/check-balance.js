'use strict';
import {PrivateKey} from "@dashevo/dashcore-lib";

const {Wallet} = require('wallet-lib');
require('./../src/network-settings');

let wallet = null;
const options = {
  autosave: false, // do not save state in storage,
  rehydrate: false, // do not rehydrate from saved storage
  injectDefaultPlugins: false, // don not subscribe to tx, chain and identity
};
wallet = new Wallet({...options,
  network: 'testnet',
  address: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
  transport: {
    dapiAddresses: ['127.0.0.1:2501:8080'],
  },
});

wallet.getAddressBalance('VLssV73exU8smfjHBTBizfV5SjZqHft1NL')
    .then((balance) => {
      console.log(balance);
    })
    .finally(() => {
      wallet.disconnect();
    });
