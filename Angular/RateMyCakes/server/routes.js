const bp = require('body-parser');
const controller  = require('./controller');
module.exports = function(app){
    app.use(bp.json());

     app.get('/cakes',controller.index);

    app.post('/cakes', controller.createCake);

    app.put('/rate/:id', controller.rateCake); //put*********
    
    return app;
}