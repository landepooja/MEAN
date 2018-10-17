const Restful = require('./models');
const bodyParser = require('body-parser');
module.exports = {
  
    index: (req,res) => {
        Restful.find({})
        .then(data => console.log(data) || res.json(data))
        .catch(errs => console.log("Can not create task") || res.json(errs))
    },

    createTask: function(req,res){
        Restful.create(req.body)  
        .then(data => console.log("hitting createTask") || res.json(data))
        .catch(errs => console.log("Can not create task1") || res.json(errs))
    },
    getTask: function(req, res){
        Restful.findById(req.params.id)
        .then(data => console.log("hitting getTask") || res.json(data))
        .catch(errs => console.log("Can not getTask task") || res.json(errs))
    },
    delete: function(req, res){
        Restful.findByIdAndDelete(req.params.id)
        .then(data => console.log("hitting delete") || res.json(data))
        .catch(errs => console.log("Can not delete task") || res.json(errs))
    },
    updateTask: function(req, res){
        Restful.findByIdAndUpdate(req.params.id, req.body)
        .then(data => console.log(data) || res.json(data))
        .catch(errs => console.log("Can not update") || res.json(errs))
    },

}