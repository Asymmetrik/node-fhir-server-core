const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./namingsystem.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'namingsystem',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let NamingSystem = require(resolveFromVersion(version, 'base/NamingSystem'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: NamingSystem.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/namingsystem.html'
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