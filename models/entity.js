var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('entity', {
    "connector": "memory",
    "fields": {
        "BeginOffset": {
            "type": "number"
        },
        "EndOffset": {
            "type": "number"
        },
        "Score": {
            "type": "number"
        },
        "Text": {
            "type": "string"
        },
        "Type": {
            "type": "string"
        }
    },
    "actions": []
});
module.exports = Model;
