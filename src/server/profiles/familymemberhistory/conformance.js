const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./familymemberhistory.config');

/**
 * @name exports
 * @summary Patient conformance statement
 */
module.exports = {
	profile: 'familymemberhistory',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: FamilyMemberHistory.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/familymemberhistory.html'
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