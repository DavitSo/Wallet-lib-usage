'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

let wallet = null;
// other test address VLssV73exU8smfjHBTBizfV5SjZqHft1NL
// VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P
let account = null;
const options = {
    autosave: false, // do not save state in storage,
    rehydrate: false, // do not rehydrate from saved storage
    injectDefaultPlugins: false, // don not subscribe to tx, chain and identity
};
wallet = new Wallet({...options, network: 'testnet', address: 'VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P',
    transport: {dapiAddresses: ['127.0.0.1:2501:8080'/*, '127.0.0.1:2501:3006'*/]}});
wallet.getAccount().then(async (acc) => {
    account = acc;

    //console.log('**********************************', wallet.storage.store)
    const transactions =  wallet.storage.store.transactions;
    //console.log(transaction._getInputAmount());
    //console.log(transaction._getOutputAmount());

    console.log('Address total balance : ', account.getTotalBalance());
    console.log('Address confirmed balance : ', account.getConfirmedBalance());
    const response = await wallet.getAddressBalance("VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P");
    console.log(response);
}).finally(() => {
    wallet.disconnect();
});