import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '@substrate/txwrapper-core';
export interface BalancesTransferWithMemoArgs extends Args {
    /**
     * The recipient address, SS-58 encoded.
     */
    dest: string;
    /**
     * The amount to send.
     */
    value: number | string;
    /**
     * The memo to attach to the transaction.
     */
    memo?: string;
}
/**
 * Transfer the balance with memo to the transaction.
 *
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function transferWithMemo(args: BalancesTransferWithMemoArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
