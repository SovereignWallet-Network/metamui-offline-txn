import { KeyringPair } from '@polkadot/keyring/types';
import { OptionsWithMeta } from '@substrate/txwrapper-core';
/**
 * Signing function. Implement this on the OFFLINE signing device.
 *
 * @param pair - The signing pair.
 * @param signingPayload - Payload to sign.
 * @returns A signed ExtrinsicPayload returns a signature with the type `0x${string}` via polkadot-js.
 */
export declare function signWith(pair: KeyringPair, signingPayload: string, options: OptionsWithMeta): `0x${string}`;
export declare const METAMUI_TYPES: {
    PeerId: string;
    identifier: string;
    public_key: string;
    metadata: string;
    DidStruct: {
        identifier: string;
        public_key: string;
        metadata: string;
    };
    Did: string;
    PublicKey: string;
    Address: string;
    LookupSource: string;
    Balance: string;
    TreasuryProposal: {
        proposer: string;
        beneficiary: string;
        value: string;
        bond: string;
    };
    CurrencyId: string;
    Amount: string;
    Memo: string;
    AccountInfo: string;
    VC: {
        hash: string;
        owner: string;
        issuers: string;
        signatures: string;
        is_vc_used: string;
        vc_type: string;
        vc_property: string;
    };
    VCType: {
        _enum: string[];
    };
    TokenVC: {
        token_name: string;
        reservable_balance: string;
        decimal: string;
        currency_code: string;
    };
    SlashMintTokens: {
        vc_id: string;
        currency_code: string;
        amount: string;
    };
    TokenTransferVC: {
        vc_id: string;
        currency_code: string;
        amount: string;
    };
    GenericVC: {
        cid: string;
    };
    VCHash: string;
    VCStatus: {
        _enum: string[];
    };
    VCid: string;
    Hash: string;
    Signature: string;
    TokenDetails: {
        token_name: string;
        currency_code: string;
        decimal: string;
        block_number: string;
    };
    TokenBalance: string;
    TokenAccountData: {
        free: string;
        reserved: string;
        frozen: string;
    };
    TokenAccountInfo: {
        nonce: string;
        data: string;
    };
    Votes: {
        index: string;
        threshold: string;
        ayes: string;
        nays: string;
        end: string;
    };
    CurrencyCode: string;
    StorageVersion: {
        _enum: string[];
    };
    VCPalletVersion: {
        _enum: string[];
    };
};
/**
 * `ChainProperties` for networks that txwrapper-polkadot supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
export declare const KNOWN_CHAIN_PROPERTIES: {
    'metablockchain-runtime': {
        ss58Format: number;
        tokenDecimals: number;
        tokenSymbol: string;
    };
};
