var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('languages', {
    "connector": "memory",
    "fields": {
        "Languages": {
            "type": "array"
        }
    },
    "actions": []
});
module.exports = Model;