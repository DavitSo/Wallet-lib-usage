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
wallet = new Wallet({...options, network: 'testnet', address: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
    transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
wallet.getAccount().then(async (acc) => {
    account = acc;

    const fee = await wallet.getTransactionFee("VLssV73exU8smfjHBTBizfV5SjZqHft1NL", 4380);
    console.log('FEE : ', fee);
}).finally(() => {
    wallet.disconnect();
});
