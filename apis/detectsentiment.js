var APIBuilder = require('@axway/api-builder-runtime');
var Utils = require('../lib/utils');

Utils.initComprehend();

var detectsentiment = APIBuilder.API.extend({
	group: 'detectsentiment',
	path: '/comprehend/detectsentiment',
	method: 'GET',
	description: 'Detect the sentiment of the text passed in the Text query parameter (e.g. "APIs are cool" returns POSITIVE with a Postive Sentiment Score of 0.8644070625305176)',
	model: 'sentiment',
	responses: {
      200: {
					"description": "Sentiment",
					"schema": {
						$ref: 'schema:///schema/comprehend/sentiment'
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
		Utils.callComprehend('detectSentiment', params, req, resp, next);

	}
});

module.exports = detectsentiment;
