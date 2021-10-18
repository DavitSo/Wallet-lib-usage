'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

let wallet = null;
// other test address VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P
let account = null;
const options = {};
wallet = new Wallet({...options, network: 'testnet', address: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
    transport: {dapiAddresses: ['127.0.0.1:2501:2500', '127.0.0.1:2501:3006']}});
wallet.getAccount().then((acc) => {
    account = acc;

    console.log('Address total balance : ', account.getTotalBalance());
    console.log('Address confirmed balance : ', account.getConfirmedBalance());
}).finally(() => {
    wallet.disconnect();
});