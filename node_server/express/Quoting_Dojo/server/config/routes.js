const bp = require('body-parser');
const controller  = require('../controllers/controller');
module.exports = function(app){
    app.set('views', __dirname + '/views');
    app.set('view engine', "ejs");
    app.use(bp.urlencoded({extended:true}))
    //app.use(flash()); if uses flash messages
 
    // app.get('/',controller.index)
    // app.get('/quotes', controller.getAll)
    // app.post('/quotes', controller.createQuote)
    app.get('/', function(req, res){
        controller.index(req,res);
    })

    app.get('/quotes', function(req,res){
        controller.getAll(req,res);
    })

    app.post('/quotes',function(req,res){
        controller.createQuote(req,res);
    })

    return app;
}