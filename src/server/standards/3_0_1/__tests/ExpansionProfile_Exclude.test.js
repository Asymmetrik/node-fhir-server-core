const ExpansionProfile_Exclude = require('../ExpansionProfile_Exclude');

describe('ExpansionProfile_Exclude Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExpansionProfile_Exclude();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExpansionProfile_Exclude.__resourceType).toBe('ExpansionProfile_Exclude');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExpansionProfile_Exclude();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
