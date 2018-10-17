const bp = require('body-parser');
const controller  = require('./controllers');
module.exports = function(app){
    app.use(bp.json());

    app.get('/',controller.index);

    app.post('/tasks', controller.createTask);

    app.get('/tasks/:id', controller.getTask);
 
    app.delete('/tasks/:id', controller.delete);

    app.put('/tasks/:id', controller.updateTask);
    
    return app;
}