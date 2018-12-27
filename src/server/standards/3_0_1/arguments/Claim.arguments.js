module.exports = {
	CARE_TEAM: {
		name: 'care-team',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-care-team',
		documentation: 'Member of the CareTeam.',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-created',
		documentation: 'The creation date for the Claim.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-encounter',
		documentation: 'Encounters associated with a billed line item.',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-enterer',
		documentation: 'The party responsible for the entry of the Claim.',
	},
	FACILITY: {
		name: 'facility',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-facility',
		documentation: 'Facility responsible for the goods and services.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-identifier',
		documentation: 'The primary identifier of the financial resource.',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-insurer',
		documentation: 'The target payor/insurer for the Claim.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-organization',
		documentation: 'The reference to the providing organization.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-patient',
		documentation: 'Patient receiving the services.',
	},
	PAYEE: {
		name: 'payee',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-payee',
		documentation: 'The party receiving any payment for the Claim.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-priority',
		documentation: 'Processing priority requested.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-provider',
		documentation: 'Provider responsible for the Claim.',
	},
	USE: {
		name: 'use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-use',
		documentation: 'The kind of financial resource.',
	},
};
