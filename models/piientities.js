var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('piientities', {
    "connector": "memory",
    "fields": {
        "Entities": {
            "type": "array"
        }
    },
    "actions": []
});
module.exports = Model;
