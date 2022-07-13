var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('language', {
    "connector": "memory",
    "fields": {
        "LanguageCode": {
            "type": "string"
        },
        "Score": {
            "type": "number"
        }
    },
    "actions": []
});
module.exports = Model;
