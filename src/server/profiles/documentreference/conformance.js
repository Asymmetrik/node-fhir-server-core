const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./documentreference.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'documentreference',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let DocumentReference = require(resolveFromVersion(version, 'base/DocumentReference'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: DocumentReference.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/documentreference.html'
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