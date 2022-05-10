import { GetRegistryOptsCore, TypeRegistry } from '@substrate/txwrapper-core';
import * as metamuiMethods from './methods';
import { KNOWN_CHAIN_PROPERTIES } from './utils/util';
export * from './utils/util';
export declare const methods: {
    balances: typeof metamuiMethods.balances;
    tokens: typeof metamuiMethods.tokens;
};
export * from '@substrate/txwrapper-core';
/**
 * Options for txwrapper-polkadot's `getRegistry` function.
 */
export interface GetRegistryOpts extends GetRegistryOptsCore {
    specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}
/**
 * Get a type registry for networks that txwrapper-polkadot supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
export declare function getRegistry({ specName, chainName, specVersion, metadataRpc, properties, }: GetRegistryOpts): TypeRegistry;
