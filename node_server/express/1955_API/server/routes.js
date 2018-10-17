const bp = require('body-parser');
const controller  = require('./controllers');
module.exports = function(app){
    app.set('views', __dirname + '/views');
    app.set('view engine', "ejs");
    app.use(bp.urlencoded({extended:true}))

    app.get('/',function(req, res){
        console.log("showAll");
        controller.showAll(req,res)})

    app.get('/new/:name', function(req, res){
        console.log("add");
    controller.add(req,res)})

    app.get('/remove/:name', function(req, res){
        console.log("remove");
        controller.remove(req,res)})

    app.get('/:name', function(req, res){
        console.log("showOne");
        controller.showOne(req,res)
    })
    return app;
}