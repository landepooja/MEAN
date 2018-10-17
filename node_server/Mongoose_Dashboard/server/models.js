// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/quote_demo',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('db checking'));

// var AnimalSchema = new mongoose.Schema({
//     name:{ type:String, required:true, minlength:2},
//     food:{type:String, required:true, minlength:2 }
// }, {timestamps:true})

// module.exports = mongoose.model('Animal', AnimalSchema);

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost/cruddash',
    {useNewUrlParser:true},
    (err)=> err?console.log(star,err):console.log("====> db running fine"),    
    )


var objSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required : true,
        minlength : [2,"error"] 
    },
    description:
    {
        type:String,
        required:true,
        minlength:3
    }
},{timestamps:true})

module.exports = mongoose.model('Object', objSchema);