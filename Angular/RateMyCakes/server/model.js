const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_demo',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('db checking'));

var RatingSchema = new mongoose.Schema({

    stars:{ type:Number, required:true},

    comment: { type:String, required:true},

}, {timestamps:true})


var CakeSchema = new mongoose.Schema({

    name:{ type:String, required:true, minlength:2},

    imageUrl: { type:String, required:true, minlength:3},

    ratings: [RatingSchema]

}, {timestamps:true})



module.exports = 
{
    cake:mongoose.model('Cake', CakeSchema),
   rating: mongoose.model('Rating', RatingSchema)
}