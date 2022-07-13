var APIBuilder = require('@axway/api-builder-runtime');
var Utils = require('../lib/utils');

Utils.initComprehend();

var detectdominantlanguage = APIBuilder.API.extend({
	group: 'detectdominantlanguage',
	path: '/comprehend/detectdominantlanguage',
	method: 'GET',
	description: 'Determines the dominant language of the input text passed in the Text query parameter (e.g. "Les API sont cool" returns "fr" for French)',
	model: 'languages',
	responses: {
      200: {
					"description": "Languages",
					"schema": {
						$ref: 'schema:///schema/comprehend/languages'
					}
      }
  },
	parameters: {
		Text: {
			type: 'query',
			description: 'A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters with a minimum length of 1.',
			optional: false
		}
	},
	action: function (req, resp, next) {

		var params = {
	    Text: req.params.Text
	  };

		// Call AWS Comprehend and respond
		Utils.callComprehend('detectDominantLanguage', params, req, resp, next);

	}
});

module.exports = detectdominantlanguage;
