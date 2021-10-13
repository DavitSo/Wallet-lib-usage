'use strict';

const {Wallet} = require('wallet-lib');
require('./src/network-settings');

const utils = require('./src/utils');
const {createAddress} = require('./src/create-address');

// TODO Correct package.json file

const address = createAddress('');

const options = {};
// TODO implement/discuss first time - from mnemonic, or load from storage and then create address from private key
const wallet = new Wallet({...options, network: 'testnet', address: address});

const account = await wallet.getAccount();

const privateKey = await utils.loadPrivateKey(`WalletId:${wallet.walletId}`);

const rawtx = account.createTransaction({
  recipient: address,
  satoshis: 1,
  privateKeys: [privateKey],
});

const tx = account.sign(rawtx, privateKey);

await account.broadcastTransaction(tx);

