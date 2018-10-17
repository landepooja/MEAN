// const bp = require('body-parser');
// const controller = require('./controller');
// module.exports = function(app){
//     app.set('views', __dirname+ '/views');
//     app.set('view engine', "ejs");
//     app.use(bp.urlencoded({extended:true}))

//     //app.get('/', controller.index)
//     app.get('/', controller.getAll)
//     app.get('/new',controller.new)
//     app.post('/new', controller.addnew)
//     app.get('/edit/', controller.edit)
//    // app.post('/edit/:id', controller.update)
    
    

//     return app;
// }

const controller = require('./controller');
const bp = require('body-parser');
// const session = require('express-session');
// const flash = require('express-flash');

module.exports = function(app){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(bp.urlencoded({extended:true}));
    // app.use(session({
    //     secret: 'blackcoffee',
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: { maxAge: 60000 }
    //   }))
    // app.use(flash());

// render routes
    app.get('/', controller.index)
    app.get('/obj/new', controller.new)
    app.get('/obj/edit/:id', controller.edit)
    app.get('/obj/:id', controller.show)
    
// operations    
    app.post('/obj', controller.createObj)
    app.post('/obj/destroy/:id', controller.destroy)
    app.post('/obj/:id', controller.editObj)


    return app;
}