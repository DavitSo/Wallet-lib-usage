'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

let wallet = null;
// other test address VLssV73exU8smfjHBTBizfV5SjZqHft1NL
// VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P
let account = null;
const options = {};
wallet = new Wallet({...options, network: 'testnet', address: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
    transport: {dapiAddresses: ['127.0.0.1:2501:8080'/*, '127.0.0.1:2501:3006'*/]}});
wallet.getAccount().then(async (acc) => {
    account = acc;

    //console.log('**********************************', wallet.storage.store)
    //const transaction =  wallet.storage.store.transactions['11a27b421cbc1c7b7c6a17f4d0e5e0a59fa70be27ad374cb9889c29e57788722'];
    //console.log(transaction._getInputAmount());
    //console.log(transaction._getOutputAmount());
    console.log('Address total balance : ', account.getTotalBalance());
    console.log('Address confirmed balance : ', account.getConfirmedBalance());
    const response = await wallet.getAddressBalance("VLssV73exU8smfjHBTBizfV5SjZqHft1NL");
    console.log(response);
}).finally(() => {
    wallet.disconnect();
});