module.exports = {
	AUTHORED_ON: {
		name: 'authored-on',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-authored-on',
		documentation: 'Search by creation date.',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-based-on',
		documentation: 'Search by requests this task is based on.',
	},
	BUSINESS_STATUS: {
		name: 'business-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-business-status',
		documentation: 'Search by business status.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-code',
		documentation: 'Search by task code.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-context',
		documentation: 'Search by encounter or episode.',
	},
	FOCUS: {
		name: 'focus',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-focus',
		documentation: 'Search by task focus.',
	},
	GROUP_IDENTIFIER: {
		name: 'group-identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-group-identifier',
		documentation: 'Search by group identifier.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-identifier',
		documentation: 'Search for a task instance by its business identifier.',
	},
	INTENT: {
		name: 'intent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-intent',
		documentation: 'Search by task intent.',
	},
	MODIFIED: {
		name: 'modified',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-modified',
		documentation: 'Search by last modification date.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-organization',
		documentation: 'Search by responsible organization.',
	},
	OWNER: {
		name: 'owner',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-owner',
		documentation: 'Search by task owner.',
	},
	PART_OF: {
		name: 'part-of',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-part-of',
		documentation: 'Search by task this task is part of.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-patient',
		documentation: 'Search by patient.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-performer',
		documentation: 'Search by recommended type of performer (e.g., Requester, Performer, Scheduler).',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-period',
		documentation: 'Search by period Task is/was underway.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-priority',
		documentation: 'Search by task priority.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-requester',
		documentation: 'Search by task requester.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-status',
		documentation: 'Search by task status.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Task-subject',
		documentation: 'Search by subject.',
	},
};
