import {
	getRegistryBase,
	GetRegistryOptsCore,
	getSpecTypes,
	TypeRegistry,
} from '@substrate/txwrapper-core';

import * as metamuiMethods from './methods';
import { KNOWN_CHAIN_PROPERTIES, METAMUI_TYPES } from './utils/util';

export * from './utils/util';

// Export methods of pallets included in the Polkadot, Kusama, Westend, Rococo
// and State{mint, mine} runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
export const methods = {
	balances: metamuiMethods.balances,
};

// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
export * from '@substrate/txwrapper-core';

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
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
export function getRegistry({
	specName,
	chainName,
	specVersion,
	metadataRpc,
	properties,
	// asCallsOnlyArg,
	// signedExtensions,
	// userExtensions,
}: GetRegistryOpts): TypeRegistry {
	const registry = new TypeRegistry();
	registry.register(METAMUI_TYPES);
	return getRegistryBase({
		chainProperties: properties,
		specTypes: getSpecTypes(registry, chainName, specName, specVersion),
		metadataRpc,
		// asCallsOnlyArg,
		// signedExtensions,
		// userExtensions,
	});
}
