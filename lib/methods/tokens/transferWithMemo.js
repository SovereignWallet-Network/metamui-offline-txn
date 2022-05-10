"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferWithMemo = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
/**
 * Transfer the token with memo to the transaction.
 *
 * NOTE: This function only attempts to transfer _transferable_ tokens. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function transferWithMemo(args, info, options) {
    return (0, txwrapper_core_1.defineMethod)({
        method: {
            args,
            name: 'transferTokenWithMemo',
            pallet: 'tokens',
        },
        ...info,
    }, options);
}
exports.transferWithMemo = transferWithMemo;
//# sourceMappingURL=transferWithMemo.js.map