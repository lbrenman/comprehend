var comprehend;

exports.initComprehend = function() {
  // console.log('utils: initComprehend() called');

  var AWS = require('aws-sdk');
  // AWS.config.loadFromPath('./conf/awsconfig.json');
  comprehend = new AWS.Comprehend();
}

function invokeComprehend(methodName, params, callback) {
  // console.log('utils: callComprehend() called');

  comprehend[methodName](params, function(err, data) {
    callback(err, data);
  });
}

function prepareSuccessResponse(data) {
	// console.log('utils: prepareSuccessResponse() called');
  // This method can help format the standard response

  return {
    status: 200,
    response: data  // no transformation
  }
};

function prepareErrorResponse(err) {
	// console.log('utils: prepareErrorResponse() called');
  // This method can help format the standard error

	return {
    status: 400,
    response: err // no transformation
  }
};

exports.callComprehend = function(method, params, req, resp, next) {
  // console.log('utils: callComprehend() called');

  invokeComprehend(method, params, function(err, data) {
    var myResponse = {};

    if (err) {
  		console.log(err, err.stack);
  		myResponse = prepareErrorResponse(err);
  	}
    else {
  		// console.log(data);
  		myResponse = prepareSuccessResponse(data);
  	}

  	resp.response.status(myResponse.status);
  	resp.send(myResponse.response);
  	next();
  });
}
