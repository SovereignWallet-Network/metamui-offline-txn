"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistry = exports.methods = void 0;
const txwrapper_core_1 = require("@substrate/txwrapper-core");
const metamuiMethods = __importStar(require("./methods"));
const util_1 = require("./utils/util");
__exportStar(require("./utils/util"), exports);
// Export methods of pallets included in the Polkadot, Kusama, Westend, Rococo
// and State{mint, mine} runtimes.
// Note: in the future this may also include methods defined within this package
// that do not exist in Substrate.
exports.methods = {
    balances: metamuiMethods.balances,
    tokens: metamuiMethods.tokens,
};
// Re-export all of txwrapper-core so users have access to utilities, construct functions,
// decode function, and types.
__exportStar(require("@substrate/txwrapper-core"), exports);
/**
 * Get a type registry for networks that txwrapper-polkadot supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
function getRegistry({ specName, chainName, specVersion, metadataRpc, properties,
// asCallsOnlyArg,
// signedExtensions,
// userExtensions,
 }) {
    const registry = new txwrapper_core_1.TypeRegistry();
    registry.register(util_1.METAMUI_TYPES);
    return (0, txwrapper_core_1.getRegistryBase)({
        chainProperties: properties,
        specTypes: (0, txwrapper_core_1.getSpecTypes)(registry, chainName, specName, specVersion),
        metadataRpc,
        // asCallsOnlyArg,
        // signedExtensions,
        // userExtensions,
    });
}
exports.getRegistry = getRegistry;
//# sourceMappingURL=index.js.map