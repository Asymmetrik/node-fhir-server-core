module.exports = {
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-based-on',
		documentation: 'Procedure that caused this media to be created.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-context',
		documentation: 'Encounter / Episode associated with media.',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-created',
		documentation: 'Date attachment was first created.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-date',
		documentation: 'When Media was collected.',
	},
	DEVICE: {
		name: 'device',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-device',
		documentation: 'Observing Device.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-identifier',
		documentation: 'Identifier(s) for the image.',
	},
	OPERATOR: {
		name: 'operator',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-operator',
		documentation: 'The person who generated the image.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-patient',
		documentation: 'Who/What this Media is a record of.',
	},
	SITE: {
		name: 'site',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-site',
		documentation: 'Body part in media.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subject',
		documentation: 'Who/What this Media is a record of.',
	},
	SUBTYPE: {
		name: 'subtype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-subtype',
		documentation: 'The type of acquisition equipment/process.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-type',
		documentation: 'photo | video | audio.',
	},
	VIEW: {
		name: 'view',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Media-view',
		documentation: 'Imaging view, e.g. Lateral or Antero-posterior.',
	},
};
