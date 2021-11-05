'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

let wallet = null;
// other test address VLssV73exU8smfjHBTBizfV5SjZqHft1NL
// VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P
let account = null;
const options = {};
wallet = new Wallet({...options, network: 'testnet', address: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
    transport: {dapiAddresses: ['127.0.0.1:2501:8080']}});
wallet.getAccount().then(async (acc) => {
    account = acc;
    const response = await wallet.getTransactions("VLssV73exU8smfjHBTBizfV5SjZqHft1NL");
    console.log(response);
}).finally(() => {
    wallet.disconnect();
});
