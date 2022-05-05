"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KNOWN_CHAIN_PROPERTIES = exports.METAMUI_TYPES = exports.signWith = void 0;
const Extrinsic_1 = require("@polkadot/types/extrinsic/v4/Extrinsic");
// To avoid circular5 dependancy
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param signingPayload - Payload to sign.
 * @returns A signed ExtrinsicPayload returns a signature with the type `0x${string}` via polkadot-js.
 */
function signWith(pair, signingPayload, options) {
    const { registry, metadataRpc } = options;
    // Important! The registry needs to be updated with latest metadata, so make
    // sure to run `registry.setMetadata(metadata)` before signing.
    registry.setMetadata((0, txwrapper_core_1.createMetadata)(registry, metadataRpc));
    const { signature } = registry
        .createType('ExtrinsicPayload', signingPayload, {
        version: Extrinsic_1.EXTRINSIC_VERSION,
    })
        .sign(pair);
    return signature;
}
exports.signWith = signWith;
exports.METAMUI_TYPES = {
    PeerId: 'OpaquePeerId',
    identifier: '[u8;32]',
    public_key: '[u8;32]',
    metadata: 'Vec<u8>',
    DidStruct: {
        identifier: 'identifier',
        public_key: 'public_key',
        metadata: 'metadata',
    },
    Did: '[u8;32]',
    PublicKey: '[u8;32]',
    Address: 'MultiAddress',
    LookupSource: 'MultiAddress',
    Balance: 'u128',
    TreasuryProposal: {
        proposer: 'Did',
        beneficiary: 'Did',
        value: 'Balance',
        bond: 'Balance',
    },
    CurrencyId: 'u32',
    Amount: 'i64',
    Memo: 'Vec<u8>',
    AccountInfo: 'AccountInfoWithDualRefCount',
    VC: {
        hash: 'Hash',
        owner: 'Did',
        issuers: 'Vec<Did>',
        signatures: 'Vec<Signature>',
        is_vc_used: 'bool',
        vc_type: 'VCType',
        vc_property: '[u8;128]',
    },
    VCType: {
        _enum: [
            'TokenVC',
            'SlashTokens',
            'MintTokens',
            'TokenTransferVC',
            'GenericVC',
        ],
    },
    TokenVC: {
        token_name: '[u8;16]',
        reservable_balance: 'Balance',
        decimal: 'u8',
        currency_code: '[u8;8]',
    },
    SlashMintTokens: {
        vc_id: 'VCid',
        currency_code: 'CurrencyCode',
        amount: 'u128',
    },
    TokenTransferVC: {
        vc_id: 'VCid',
        currency_code: 'CurrencyCode',
        amount: 'u128',
    },
    GenericVC: {
        cid: '[u8;64]',
    },
    VCHash: 'Vec<u8>',
    VCStatus: {
        _enum: ['Active', 'Inactive'],
    },
    VCid: '[u8;32]',
    Hash: 'H256',
    Signature: 'H512',
    TokenDetails: {
        token_name: 'Vec<u8>',
        currency_code: 'Vec<u8>',
        decimal: 'u8',
        block_number: 'BlockNumber',
    },
    TokenBalance: 'u128',
    TokenAccountData: {
        free: 'TokenBalance',
        reserved: 'TokenBalance',
        frozen: 'TokenBalance',
    },
    TokenAccountInfo: {
        nonce: 'u32',
        data: 'TokenAccountData',
    },
    Votes: {
        index: 'ProposalIndex',
        threshold: 'MemberCount',
        ayes: 'Vec<Did>',
        nays: 'Vec<Did>',
        end: 'BlockNumber',
    },
    CurrencyCode: '[u8;8]',
    StorageVersion: {
        _enum: ['V1_0_0', 'V2_0_0', 'V3_0_0'],
    },
    VCPalletVersion: {
        _enum: ['V1_0_0', 'V2_0_0'],
    },
};
/**
 * `ChainProperties` for networks that txwrapper-polkadot supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
exports.KNOWN_CHAIN_PROPERTIES = {
    'metablockchain-runtime': {
        ss58Format: 42,
        tokenDecimals: 6,
        tokenSymbol: 'MetaMUI',
    },
};
//# sourceMappingURL=util.js.map