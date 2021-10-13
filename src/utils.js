'use strict';

// eslint-disable-next-line no-unused-vars
const {Mnemonic, PrivateKey} = require('@dashevo/dashcore-lib');
const {secureStorage} = require('./secure-storage');

/**
 * Generates new mnemonic
 * @return {Promise<*>}
 */
async function generateMnemonic() {
  return new Mnemonic();
}

/**
 * Show mnemonic to user
 * @param {Mnemonic | string} mnemonic User mnemonic
 * @return {Promise<void>}
 */
async function showMnemonicToUser(mnemonic) {
  // TODO change implementation as needed
  console.log(`Your mnemonic is ${mnemonic.toString()}`);
}

/**
 * Save private key into storage
 * @param {string} passphrase Identifier of the user, TODO discuss
 * @param {string | PrivateKey} privateKey
 * @return {Promise<null>}
 */
function savePrivateKey(passphrase, privateKey) {
  return secureStorage.setItem(passphrase, privateKey.toString(), {});
}

/**
 * Load private key/s from storage
 * @param {string} passphrase Identifier of the user
 * @return {Promise<*>}
 */
function loadPrivateKey(passphrase) {
  return secureStorage.getItem(passphrase, {});
}

module.exports = {
  generateMnemonic,
  showMnemonicToUser,
  savePrivateKey,
  loadPrivateKey,
};
