module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category',
		documentation: 'food | medication | environment | other - Category of Substance.',
	},
	CRITICALITY: {
		name: 'criticality',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality',
		documentation: 'CRITL | CRITH | CRITU.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-date',
		documentation: 'When recorded.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-identifier',
		documentation: 'External ids for this item.',
	},
	LAST_DATE: {
		name: 'last-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date',
		documentation: 'Date(/time) of last known occurrence of a reaction.',
	},
	MANIFESTATION: {
		name: 'manifestation',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation',
		documentation: 'Clinical symptoms/signs associated with the Event.',
	},
	ONSET: {
		name: 'onset',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset',
		documentation: 'Date(/time) when manifestations showed.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-patient',
		documentation: 'Who the sensitivity is for.',
	},
	RECORDER: {
		name: 'recorder',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder',
		documentation: 'Who recorded the sensitivity.',
	},
	REPORTER: {
		name: 'reporter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-reporter',
		documentation: 'Source of the information about the allergy.',
	},
	ROUTE: {
		name: 'route',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route',
		documentation: 'How the subject was exposed to the substance.',
	},
	SEVERITY: {
		name: 'severity',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity',
		documentation: 'mild | moderate | severe (of event as a whole).',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-status',
		documentation: 'active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error.',
	},
	SUBSTANCE: {
		name: 'substance',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-substance',
		documentation: 'Substance, (or class) considered to be responsible for risk.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-type',
		documentation: 'allergy | intolerance - Underlying mechanism (if known).',
	},
};
