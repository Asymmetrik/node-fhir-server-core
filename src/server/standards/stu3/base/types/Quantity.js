const Element = require('./Element');
const Code = require('./Code');

class Quantity extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// value	Σ	0..1	decimal	Numerical value (with implicit precision)
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// comparator	?!Σ	0..1	code	< | <= | >= | > - how to understand the value
	// QuantityComparator (Required)
	set comparator(comparator) {
		this._comparator = new Code(comparator);
	}

	get comparator() {
		return this._comparator;
	}

	// unit	Σ	0..1	string	Unit representation
	set quantityUnit(quantityUnit) {
		this._quantityUnit = quantityUnit;
	}

	get quantityUnit() {
		return this._quantityUnit;
	}

	// system	ΣI	0..1	uri	System that defines coded unit form
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// code	Σ	0..1	code	Coded form of the unit
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		const json = {
			value: this._value,
			comparator: this._comparator,
			quantityUnit: this._quantityUnit,
			system: this._system,
			code: this._code,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Quantity;
