var APIBuilder = require('@axway/api-builder-runtime');
var Utils = require('../lib/utils');

Utils.initComprehend();

var detectentities = APIBuilder.API.extend({
	group: 'detectpiientities',
	path: '/comprehend/detectpiientities',
	method: 'GET',
	description: 'Detect PII (Personally Identifiable Information) entities of the text passed in the Text query parameter (e.g. "Hello Paulo Santos. The latest statement for your credit card account 1111-0000-1111-0000 was mailed to 123 Any Street, Seattle, WA 98109" returns NAME, CREDIT_DEBIT_NUMBER and ADDRESS)',
	model: 'piientities',
	responses: {
      200: {
					"description": "Entities",
					"schema": {
						$ref: 'schema:///schema/comprehend/piientities'
					}
      }
  },
	parameters: {
		Text: {
			type: 'query',
			description: 'A UTF-8 text string. Each string must contain fewer that 5,000 bytes of UTF-8 encoded characters with a minimum length of 1.',
			optional: false
		},
		LanguageCode: {
			type: 'query',
			description: 'The language of the input text:  en | es | fr | de | it | pt | ar | hi | ja | ko | zh | zh-TW',
			optional: true
		}
	},
	action: function (req, resp, next) {


		// Set params for comprehend. If no language specified, use English
		let LanguageCode = "en";
		if(req.params.LanguageCode) {
			LanguageCode = req.params.LanguageCode;
		}

		var params = {
	    LanguageCode: LanguageCode,
	    Text: req.params.Text
	  };

		// Call AWS Comprehend and respond
		Utils.callComprehend('detectPiiEntities', params, req, resp, next);

	}
});

module.exports = detectentities;
