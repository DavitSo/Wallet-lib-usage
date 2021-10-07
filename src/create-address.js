'use strict';

const {Networks} = require('./network-settings');
const utils = require('./utils');
const {Mnemonic} = require('@dashevo/dashcore-lib');

/**
 *
 * @param {string} passphrase
 * @return {Promise<Address>}
 */
async function createAddress(passphrase) {
  // create mnemonic and show to user
  const mnemonic = new Mnemonic();
  await utils.showMnemonicToUser(mnemonic);

  // create and save private key into storage
  const hdPrivateKey = mnemonic.toHDPrivateKey(passphrase, Networks.get('testnet'));
  const privateKey = hdPrivateKey.privateKey;
  await utils.savePrivateKey(passphrase, privateKey); // TODO discuss for 'single user'/'multiple wallet' case

  // TODO some checking with mnemonic and keys
  // TODO change wallet lib to remove private key storing
  return privateKey.toAddress(Networks.get('testnet'));
}

module.exports = {
  createWallet: createAddress,
};
