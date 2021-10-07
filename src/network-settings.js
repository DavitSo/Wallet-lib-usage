'use strict';

const {Networks} = require('@dashevo/dashcore-lib');

Networks.add({
  name: 'testnet',
  alias: ['regtest', 'devnet', 'evonet', 'local'],
  // name: 'hellenicnet',
  // alias: 'hellenicnet',
  pubkeyhash: 0x46, // PUBKEY_ADDRESS
  privatekey: 0xc6, // SECRET_KEY
  scripthash: 0x47, // SCRIPT_ADDRESS
  xpubkey: 0x43587cf, // 'tpub' (Bitcoin Default)
  xprivkey: 0x04358394, // 'tprv' (Bitcoin Default)
  xpubkey256bit: 0x0eed270b, // 'dptp' (dashpay testnet public)
  xprivkey256bit: 0x0eed2774, // 'dpts' (dashpay testnet secret)
});

module.exports = {
  Networks,
};
