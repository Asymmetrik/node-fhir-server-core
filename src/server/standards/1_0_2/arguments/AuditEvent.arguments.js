module.exports = {
	ACTION: {
		name: 'action',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-action',
		documentation: 'Type of action performed during the event.',
	},
	ADDRESS: {
		name: 'address',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-address',
		documentation: 'Identifier for the network access point of the user device.',
	},
	ALTID: {
		name: 'altid',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-altid',
		documentation: 'Alternative User id e.g. authentication.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-date',
		documentation: 'Time when the event occurred on source.',
	},
	DESC: {
		name: 'desc',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-desc',
		documentation: 'Instance-specific descriptor for Object.',
	},
	IDENTITY: {
		name: 'identity',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-identity',
		documentation: 'Specific instance of object (e.g. versioned).',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-name',
		documentation: 'Human-meaningful name for the user.',
	},
	OBJECT_TYPE: {
		name: 'object-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-object-type',
		documentation: 'Type of object involved.',
	},
	PARTICIPANT: {
		name: 'participant',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-participant',
		documentation: 'Direct reference to resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-patient',
		documentation: 'Direct reference to resource.',
	},
	POLICY: {
		name: 'policy',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-policy',
		documentation: 'Policy that authorized event.',
	},
	REFERENCE: {
		name: 'reference',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-reference',
		documentation: 'Specific instance of resource (e.g. versioned).',
	},
	SITE: {
		name: 'site',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-site',
		documentation: 'Logical source location within the enterprise.',
	},
	SOURCE: {
		name: 'source',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-source',
		documentation: 'The identity of source detecting the event.',
	},
	SUBTYPE: {
		name: 'subtype',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-subtype',
		documentation: 'More specific type/id for the event.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-type',
		documentation: 'Type/identifier of event.',
	},
	USER: {
		name: 'user',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/AuditEvent-user',
		documentation: 'Unique identifier for the user.',
	},
};
