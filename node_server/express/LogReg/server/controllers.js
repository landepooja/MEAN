const Log  = require('./models');
module.exports = {
    index: (req, res)=>{
        res.render('index',{test:"hello world"})
    },

    process: (req, res)=>{
        console.log("hitiing process")
        Log.create(req.body)
        
            .then((data)=>{res.render('success',{data:data})})
            .catch(errs=> console.log(errs)||res.redirect('/'))
    },
    // createQuote:(req,res)=>{
    //     console.log('contents of the form: ' + req.body.name);
    //     Qoute.create(req.body);
    //     res.redirect('/');
    // },

}