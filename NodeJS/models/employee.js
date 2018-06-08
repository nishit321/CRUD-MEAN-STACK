const moongose = require('mongoose');

// 1 - Name of Model
// 2 - Schema of Model
var Employee = moongose.model('employee',{
    name:{type:String},
    position:{type:String},
    office:{type:String},
    salary:{type:Number}
});
module.exports = {Employee};