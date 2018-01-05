const controller = require('./controllers/observation.controller');

let routes = [
  {
    type: 'get',
		path: '/dstu2/observation',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
      name: 'patient',
			type: 'string',
			required: true
    }, {
      name: 'category',
      type: 'string'
    }, {
      name: 'code',
      type: 'string'
    }, {
      name: 'date',
      type: 'string'
    }, {
			name: '_format',
			type: 'string'
		}],
    scopes: [],
    controller: controller.getObservations
  },
  {
    type: 'get',
		path: '/dstu2/observation/:id',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
      name: 'id',
      type: 'number',
      required: true
    }],
    scopes: [],
    controller: controller.getObservationByID
  }
];



/**
 * @name exports
 * @summary Observations config
 */
module.exports = {
	routes
};