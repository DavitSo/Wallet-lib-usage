'use strict';

const {Wallet} = require('wallet-lib');
require('./../src/network-settings');

const options = {
  autosave: false, // do not save state in storage,
  rehydrate: false, // do not rehydrate from saved storage
  injectDefaultPlugins: false, // don not subscribe to tx, chain and identity
};
const wallet = new Wallet({...options, network: 'testnet', address: 'VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P',
  transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});

wallet.getAddressUTXO('VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P')
    .then((response) => {
      console.log(response);
    })
    .finally(() => {
      wallet.disconnect();
    });
