const Qoute  = require('./models');
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

// createQuote:(req,res)=>{
//     console.log("hit create quote");
//     Quote.create(req.body, 
//         (err, newquote)=>{
//             if(err){
//                 star(); 
//const star =()=>console.log(FgYellow,'*'.repeat(50));(on top of page) 
//                 for(let key in err.errors){
//                     console.log(key,'==> :', err.errors[key].message);
//                     req.flash(key, err.errors[key].message);
//                 }
//                 res.redirect('/');
//             }
//             else{
//                 console.log(newquote);
//                 console.log("create successful");                                
//                 res.redirect('/quotes');
//             }
//     });
// },
// allQuotes:(req,res)=>{
//     Quote.find({}).sort({createdAt: -1})
//         .then((data)=>{console.log(data);
//          res.render('allQuotes',{allQuotes:data})})
//         .catch((err)=>{res.render('allQuotes',{errors:err})})
// }