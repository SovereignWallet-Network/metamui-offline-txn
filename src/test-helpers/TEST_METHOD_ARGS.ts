/**
 * Arguments for methods to use in testing.
 */
export const TEST_METHOD_ARGS = {
	balances: {
		transferKeepAlive: {
			dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
			value: 12,
		},
		transferWithMemo: {
			dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
			value: 10,
			memo: 'Memo test',
		},
	},
	system: {
		remark: {
			remark: '0x42194253', // random bytes
		},
	},
	vesting: {
		vest: {},
		vestOther: {
			target: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P', // seed "//Charlie"
		},
	},
	multisig: {
		cancelAsMulti: {
			threshold: 2,
			otherSignatories: [
				'15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
			timepoint: {
				height: 123,
				index: 3,
			},
			callHash: '0x0500306721211d5404bd9da88e02043',
		},
		approveAsMulti: {
			threshold: 2,
			otherSignatories: [
				'15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
			maybeTimepoint: {
				height: 123,
				index: 3,
			},
			callHash: '0x0500306721211d5404bd9da88e02043',
			maxWeight: '90071992547409910',
		},
		asMulti: {
			threshold: 2,
			otherSignatories: [
				'15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5', // seed "//Alice"
				'14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3', // seed "//Bob",
				'14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q', // seed "//Charlie"
			],
			maybeTimepoint: {
				height: 123,
				index: 3,
			},
			call: '0x0500306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00a0be1c448399',
			storeCall: false,
			maxWeight: '90071992547409910',
		},
	},
};
