'use strict';

// eslint-disable-next-line no-unused-vars
const {Mnemonic, PrivateKey} = require('@dashevo/dashcore-lib');
const fs = require('fs');

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
 */
function savePrivateKey(passphrase, privateKey) {
  fs.writeFileSync('../secret.txt', privateKey.toString(), {encoding: 'utf-8'});
}

/**
 * Load private key/s from storage
 * @param {string} passphrase Identifier of the user
 * @return {string}
 */
function loadPrivateKey(passphrase) {
  return fs.readFileSync('../secret.txt', {encoding: 'utf-8'});
}

module.exports = {
  generateMnemonic,
  showMnemonicToUser,
  savePrivateKey,
  loadPrivateKey,
};
