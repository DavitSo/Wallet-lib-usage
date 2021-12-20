'use strict';

const {Wallet} = require('wallet-lib');
require('./../src/network-settings');

const utils = require('./../src/utils');
const {createAddress} = require('./../src/create-address');
const {PrivateKey} = require('@dashevo/dashcore-lib');

const mnemonic = 'ask smile visit napkin response person leopard write spring steak reform garment';
let wallet = null;
let account = null;

const options = {
     autosave: false, // do not save state in storage,
     rehydrate: false, // do not rehydrate from saved storage
     injectDefaultPlugins: false, // don not subscribe to tx, chain and identity
};
wallet = new Wallet({...options, network: 'testnet', mnemonic: mnemonic,
    transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
wallet.getAccount().then((acc) => {
    account = acc;
    //const privateKey = utils.loadPrivateKey('');
    //const pk = new PrivateKey(privateKey);
    console.log('Account : ', account.BIP44PATH);
    const address1 = account.getUnusedAddress();
    console.log('Address1 : ', address1.address);
    return wallet.createAccount({index: 1000});
}).then((account) => {
    const address2 = account.getUnusedAddress();
    console.log('Account : ', account.BIP44PATH);
    console.log('Address2 : ', address2.address);

    const accountIndexes = wallet.getAccountsIndexes();
    console.log(accountIndexes);
    console.log(`Wallet has ${accountIndexes.length} accounts`);
    return wallet.getAccount({index: accountIndexes[1]});
}).then((account) => {
    console.log('Second Account BIP44PATH is : ', account.BIP44PATH);
})
    .catch((error) => console.log('Error details : ', error))
    .finally(() => wallet.disconnect());
