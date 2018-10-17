const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_demo',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('db checking'));

var LogSchema = new mongoose.Schema({
    first_name:{ type:String, required:true, minlength:[2, "Name required"]},
    last_name:{type:String, required:true, minlength:[2, "Name required"]},
    password:{ type:String, required:true, minlength:[8,"Password should be 8 characters"]},
    email:{type:String, required:true, minlength:[5,"enter valid email"]},
    birthday:{type:String, required:true, minlength:[0,"ENter birthday"] }
}, {timestamps:true})

module.exports = mongoose.model('Log', LogSchema);