const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_demo',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('db checking'));

var RestfulSchema = new mongoose.Schema({

    title:{ type:String, required:true, minlength:2},

    // description:{ type:String, required:true, minlength:5},

    // completed:{ type:Boolean, default:false},

}, {timestamps:true})

module.exports = mongoose.model('Restful', RestfulSchema);