const ExplanationOfBenefit = require('../ExplanationOfBenefit');

describe('ExplanationOfBenefit Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExplanationOfBenefit.__resourceType).toBe('ExplanationOfBenefit');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
