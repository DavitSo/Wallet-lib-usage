# Code examples of wallet-lib

## Create address, transaction and broadcast it
Creates address (by hardcoded mnemonic). Show mnemonic and address. Save if needed.
Creates a transaction for created account.
Transaction signing of transaction using privateKey. 
```
    account.createTransaction({
        recipient: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
        satoshis: 1000000000,
        privateKeys: [pk],
      });
```

If subscriptons/storage are disabled should pass utxo's list.
```
    account.createTransaction({
        recipient: 'VLssV73exU8smfjHBTBizfV5SjZqHft1NL',
        satoshis: 1000000000,
        privateKeys: [pk],
        utxos: wallet.getAddressUTXO('VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P'),
    });
```
Finally, broadcast transactions.
```
    account.broadcastTransaction(transaction);
```

## Check address balance
Retrieve balance of given address.
```
    wallet.getAddressBalance('VLssV73exU8smfjHBTBizfV5SjZqHft1NL');
```

## Get address transactions
Retrieve transactions of given address.
Implemented offset based pagination.
```
    wallet.getTransactions('VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P', 2, 3)
```

## Get transaction fee
Calculates transaction fee for given address and amount
```
    wallet.getTransactionFee('VLssV73exU8smfjHBTBizfV5SjZqHft1NL', 4380)
```

## Get address UTXO
Calculates address utxo's
```
    wallet.getAddressUTXO('VTa6MGEipZNAsKyGsgZuqdx1VirHA2E44P')
```
