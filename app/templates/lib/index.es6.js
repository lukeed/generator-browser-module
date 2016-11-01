'use strict';

export default function (input, opts = {}) {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string; got ${typeof input}`);
	}

	return `${input} & ${opts.postfix || 'rainbows'}`;
};
