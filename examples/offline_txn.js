const { Keyring, ApiPromise, WsProvider } = require('@polkadot/api');
const { cryptoWaitReady } = require('@polkadot/util-crypto');
const {
	construct,
	decode,
	deriveAddress,
	getRegistry,
	methods,
	signWith,
	METAMUI_TYPES,
} = require('../lib');

async function main() {
	// Wait for the promise to resolve async WASM
	await cryptoWaitReady();
	// Create a new keyring, and add an "Alice" account
	const keyring = new Keyring();
	const alice = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
	console.log(
		"Alice's SS58-Encoded Address:",
		deriveAddress(alice.publicKey, 42)
	);

	// Use the appropriate node websocket URL
	const rpc_url = 'wss://n3testnet.metabit.exchange';
	const provider = new WsProvider(rpc_url);
	const api = await ApiPromise.create({
		provider,
		types: METAMUI_TYPES,
	});

	console.log('api genesisHash: ', api.genesisHash.toHex());
	const chain = await api.rpc.system.chain();
	const genesisHash = api.genesisHash.toHex();
	// Retrieve the latest header
	const lastHeader = await api.rpc.chain.getHeader();
	const blockNumber = lastHeader.number;
	const blockHash = lastHeader.hash;
	console.log(`${chain}: last block #${blockNumber} has hash ${blockHash}`);

	const senderNonce = await api.rpc.system.accountNextIndex(alice.address);
	const metadataRpc = await api.rpc.state.getMetadata(blockHash);

	const { specVersion, transactionVersion, specName } =
		await api.rpc.state.getRuntimeVersion();
	console.log(
		`specVersion: ${specVersion}, transactionVersion: ${transactionVersion}, specName: ${specName}`
	);

	const metamui_properties = {
		ss58Format: 42,
		tokenDecimals: 6,
		tokenSymbol: 'MetaMUI',
	};

	const registry = getRegistry({
		specName,
		chainName: chain,
		specVersion,
		metadataRpc,
		properties: metamui_properties,
		asCallsOnlyArg: true,
	});

	// Register our custom chain types
	registry.register(METAMUI_TYPES);
	const unsigned = methods.balances.transferWithMemo(
		{
			value: '5000000',
			dest: '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // did:ssid:swn2
			memo: registry.createType('Memo', 'TestMemo'),
		},
		{
			address: deriveAddress(alice.publicKey, 42),
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

	// Warning! large data ahead!
	// console.log('unsigned: ', unsigned);
	// Decode an unsigned transaction.
	const decodedUnsigned = decode(unsigned, {
		metadataRpc,
		registry,
	});
	// console.log('decodedUnsigned: ', decodedUnsigned);
	console.log(
		`\nDecoded Transaction\n  To: ${decodedUnsigned.method.args.dest.id}\n` +
			`  Amount: ${decodedUnsigned.method.args.value}`
	);

	// Construct the signing payload from an unsigned transaction.
	const signingPayload = construct.signingPayload(unsigned, { registry });
	console.log(`\nPayload to Sign: ${signingPayload}`);

	// Decode the information from a signing payload.
	const payloadInfo = decode(signingPayload, {
		metadataRpc,
		registry,
	});
	console.log(
		`\nDecoded Transaction\n  To: ${payloadInfo.method.args.dest.id}\n` +
			`  Amount: ${payloadInfo.method.args.value}`
	);

	// Sign a payload. This operation should be performed on an offline device.
	const signature = signWith(alice, signingPayload, {
		metadataRpc,
		registry,
	});
	console.log(`\nSignature: ${signature}`);

	// Serialize a signed transaction.
	const tx = construct.signedTx(unsigned, signature, {
		metadataRpc,
		registry,
	});
	console.log(`\nTransaction to Submit: ${tx}`);

	// Derive the tx hash of a signed transaction offline.
	const expectedTxHash = construct.txHash(tx);
	console.log(`\nExpected Tx Hash: ${expectedTxHash}`);

	const actualTxHash = await api.rpc.author.submitExtrinsic(tx);
	console.log(`Actual Tx Hash: ${actualTxHash}`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
