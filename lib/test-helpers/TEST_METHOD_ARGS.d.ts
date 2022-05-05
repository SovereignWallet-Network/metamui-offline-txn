/**
 * Arguments for methods to use in testing.
 */
export declare const TEST_METHOD_ARGS: {
    balances: {
        transferKeepAlive: {
            dest: string;
            value: number;
        };
        transferWithMemo: {
            dest: string;
            value: number;
            memo: string;
        };
    };
    system: {
        remark: {
            remark: string;
        };
    };
    vesting: {
        vest: {};
        vestOther: {
            target: string;
        };
    };
    multisig: {
        cancelAsMulti: {
            threshold: number;
            otherSignatories: string[];
            timepoint: {
                height: number;
                index: number;
            };
            callHash: string;
        };
        approveAsMulti: {
            threshold: number;
            otherSignatories: string[];
            maybeTimepoint: {
                height: number;
                index: number;
            };
            callHash: string;
            maxWeight: string;
        };
        asMulti: {
            threshold: number;
            otherSignatories: string[];
            maybeTimepoint: {
                height: number;
                index: number;
            };
            call: string;
            storeCall: boolean;
            maxWeight: string;
        };
    };
};
