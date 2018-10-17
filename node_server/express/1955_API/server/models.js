const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_demo',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('db checking'));

var ApiSchema = new mongoose.Schema({
    name:{ type:String, required:true, minlength:5},
}, {timestamps:true})

module.exports = mongoose.model('Api', ApiSchema);