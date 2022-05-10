import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface TokensTransferArgs extends Args {
	/**
	 * The recipient address, SS-58 encoded.
	 */
	dest: string;
	/**
	 * Currency code
	 */
	currencyCode: string;
	/**
	 * The amount to send.
	 */
	 amount: number | string;
}

/**
 * Construct a token transfer transaction offline.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function transfer(
	args: TokensTransferArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'transfer',
				pallet: 'tokens',
			},
			...info,
		},
		options
	);
}
