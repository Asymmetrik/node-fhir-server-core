const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./contract.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'contract',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Contract = require(resolveFromVersion(version, 'base/Contract'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Contract.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/contract.html'
			},
			interaction: [{
				code: 'read'
			}, {
				code: 'search'
			}],
			searchParam: searchParams
		};
	}
};