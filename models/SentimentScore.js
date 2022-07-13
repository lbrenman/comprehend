var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('SentimentScore', {
    "connector": "memory",
    "fields": {
        "Positive": {
            "type": "number"
        },
        "Negative": {
            "type": "number"
        },
        "Neutral": {
            "type": "number"
        },
        "Mixed": {
            "type": "number"
        }
    },
    "actions": []
});
module.exports = Model;