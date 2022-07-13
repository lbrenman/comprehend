var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('piientity', {
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
        "Type": {
            "type": "string"
        }
    },
    "actions": []
});
module.exports = Model;
