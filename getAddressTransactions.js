'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

let wallet = null;
// other test address VLssV73exU8smfjHBTBizfV5SjZqHft1NL
// VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P
let account = null;
const options = {};
wallet = new Wallet({...options, network: 'testnet', address: 'VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P',
    transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
wallet.getAccount().then(async (acc) => {
    account = acc;
    const response = await wallet.getTransactions("VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P", 2, 3);
    console.log(response);
}).finally(() => {
    wallet.disconnect();
});
