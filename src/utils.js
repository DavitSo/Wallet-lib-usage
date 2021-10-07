'use strict';

const {Mnemonic, PrivateKey} = require('@dashevo/dashcore-lib');

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
 * @return {Promise<*>}
 */
async function savePrivateKey(passphrase, privateKey) {
  if (global.redisClient) {
    // TODO guard if privateKey is null
    return global.redisClient.getAsync(`PrivateKey:${passphrase.toString()}`, (error, buffer) => {
      if (error) {
        return Promise.reject(error);
      }
      return Promise.resolve(JSON.parse(buffer.toString()));
    }).then((result) => {
      let keys = [];
      if (result) { // not only private key for user
        if (Array.isArray(result)) {
          keys = keys.concat(result);
          keys.push(privateKey);
        } else {
          keys.push(result);
          keys.push(privateKey);
        }
      } else {
        keys.push(privateKey);
      }
      return global.redisClient.setAsync(`PrivateKey:${passphrase.toString()}`, Buffer.from(JSON.stringify(keys)), (error) => {
        if (error) {
          console.log(`ERROR : Cant save private key. Details: ${error}`);
        }
      });
    }).catch((error) => console.log(`ERROR : Cant save private key. Details : ${error}`));
  }
  return Promise.reject(new Error(`Redis is unavailable`));
}

/**
 * Load private key/s from storage
 * @param {string} passphrase Identifier of the user
 * @return {Promise<*>}
 */
async function loadPrivateKey(passphrase) {
  if (global.redisClient) {
    return global.redisClient.getAsync(`PrivateKey:${passphrase.toString()}`, (error, buffer) => {
      if (error) {
        return Promise.reject(error);
      }
      return Promise.resolve(JSON.parse(buffer.toString()));
    }).catch((error) => console.log(`ERROR : Cant save private key. Details : ${error}`));
  }
  return Promise.reject(new Error(`Redis is unavailable`));
}

module.exports = {
  generateMnemonic,
  showMnemonicToUser,
  savePrivateKey,
  loadPrivateKey,
};
