  var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('sentiment', {
    "connector": "memory",
    "fields": {
        "Sentiment": {
            "type": "string"
        }
    },
    "actions": []
});
module.exports = Model;
