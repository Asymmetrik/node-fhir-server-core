/* eslint-disable no-unused-vars */
module.exports.getCount = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	// reject(new Error(message));
	resolve(12);
});

module.exports.getDevice = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDevice\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getDeviceById = (req, logger, context) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getDeviceById\'';
	logger.info(message);
	reject(new Error(message));
});