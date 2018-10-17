const Qoute  = require('../models/model');
module.exports = {
    index: (req, res)=>{
        res.render('index',{test:"hello world"})
    },

    getAll: (req, res)=>{
        Qoute.find({})
            .then((data)=>{res.render('quotes',{allQuotes:data})})
            .catch((errs)=>{res.render('quotes', {errors:errs})})
    },
    createQuote:(req,res)=>{
        console.log('contents of the form: ' + req.body.name);
        Qoute.create(req.body);
        res.redirect('/');
    },

}
