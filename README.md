# @metamui/offline-txn

This library module helps in generating the MetaMUI offline transactions which can used in various places such as cold wallet transactions. 

## Get Started

Install the library

```bash
npm i @metamui/offline-txn
```

or add it using yarn

```bash
yarn add @metamui/offline-txn
```

Import the library into your JS/TS file

```bash
const {
	construct,
	decode,
	deriveAddress,
	getRegistry,
	methods,
	signWith,
} = require('@metamui/offline-txn');
```

Construct the unsigned transaction

```bash
const unsigned = methods.balances.transferWithMemo(
		{
			value: '1000000',
			dest: recieverAddress, // reciever address/public key
			memo: 'Your Memo',
		},
		{
			address: deriveAddress(sender.publicKey, 42),
			blockHash,
			blockNumber: registry.createType('BlockNumber', blockNumber).toNumber(),
			eraPeriod: 64,
			genesisHash,
			metadataRpc,
			nonce: senderNonce, 
			specVersion,
			tip: 0,
			transactionVersion,
		},
		{
			metadataRpc,
			registry,
		}
	);

    // Construct the signing payload from an unsigned transaction.
	const signingPayload = construct.signingPayload(unsigned, { registry });   
```

Sign the unsigned transaction & serialise it
```bash
    // Sign a payload
	const signature = signWith(sender, signingPayload, {
		metadataRpc,
		registry,
	});

    // Serialize a signed transaction.
	const tx = construct.signedTx(unsigned, signature, {
		metadataRpc,
		registry,
	});
```

Now the `tx` is ready to be broadcasted to blockchain.

Have a look at the [examples](examples/README.md) to see how you can perform the whole lifecycle of a transaction, from generation to signing to broadcast.

### Develop

Use node > 14

Install dependencies:

```bash
yarn install
```

Build all packages:

```bash
yarn run build
```
