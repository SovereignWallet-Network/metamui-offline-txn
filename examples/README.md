# How to use `@metamui/offline-txn`

Here's a mini-tutorial on how `@metamui/offline-txn` can interact with a MetaMUI blockchain. 

## Get Started

1. Based on the which chain environment you want to connect with, update the `rpc_url` in [offline_txn.js](offline_txn.js). Currently its set to testnet MetaMUI blockchain.

2. Run the example script in this folder. It will interact with your given node.

    ```bash
    node example/offline_txn.js
    ```

## Expected Output

Here's a sample output of the above script, using a MetaMUI testnet node. Your payload to sign and signature will of course differ from this example.

```
Alice's SS58-Encoded Address: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
api genesisHash:  0x69139eb2bc63bc382daed9da9f0c64fa5fd56c80c6ff992e3cca7a2ec61ec3c3
Metablockchain Testnet: last block #4769870 has hash 0xbebd709a699dd4c4abf8f945f681a186d4309b99084b2c156e44c1f3b9477db6
specVersion: 20, transactionVersion: 1, specName: metablockchain-runtime

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 5000000

Payload to Sign: 0x9c0300008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48022d3101e500a51800140000000100000069139eb2bc63bc382daed9da9f0c64fa5fd56c80c6ff992e3cca7a2ec61ec3c3bebd709a699dd4c4abf8f945f681a186d4309b99084b2c156e44c1f3b9477db6

Decoded Transaction
  To: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  Amount: 5000000

Signature: 0x0140438d0588e62c023a31e457a260a8a66349f231a8d5ecb950a231ef01d1e530100272a71acdbbc550ea2fddeb33db0c9d1de4923da7f7686c2aec479ba16a81

Transaction to Submit: 0x3d028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0140438d0588e62c023a31e457a260a8a66349f231a8d5ecb950a231ef01d1e530100272a71acdbbc550ea2fddeb33db0c9d1de4923da7f7686c2aec479ba16a81e500a518000300008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48022d3101

Expected Tx Hash: 0x33130c2d3d304cf0a39ef9d33abebb2a6987f257d45100ca2c11373b604b3421
Actual Tx Hash: 0x33130c2d3d304cf0a39ef9d33abebb2a6987f257d45100ca2c11373b604b3421
```

## Offline vs. Online

In the examples, the `rpcToLocalNode` function is the only function that needs to be called with internet access. Everything else can be performed offline. In particular, this example shows how to perform the following operations offline:

- Generate a tx,
- Create its signing payload,
- Sign the signing payload,
- Calculate the tx hash,
- Decode at various levels of the tx lifecycle.
