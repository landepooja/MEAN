const Cake = require('./model')["cake"];
const Rating = require('./model')["rating"];
const bodyParser = require('body-parser');
module.exports = {
  
    index: (req,res) => {
        console.log("We've hit the controller!")
        Cake.find({})
        .then(data => console.log("hitting index") || res.json(data))
        .catch(errs => console.log("Can not create cake") || res.json(errs))
    },

    createCake: function(req,res){
        Cake.create(req.body)  
        .then(data => console.log("hitting createCake") || res.json(data))
        .catch(errs => console.log("Can not create Cake1") || res.json(errs))
    },
    rateCake: function(req, res){
        //console.log("Hitting Rate CAke . Rate: ${req.body}")
        Cake.findByIdAndUpdate(req.params.id, {$push: {ratings:req.body}})
        .then(data => console.log("hitting rateCake") || res.json(data))
        .catch(errs => console.log("Can not rateCake Cake") || res.json(errs))
    },
    // delete: function(req, res){
    //     Cake.findByIdAndDelete(req.params.id)
    //     .then(data => console.log("hitting delete") || res.json(data))
    //     .catch(errs => console.log("Can not delete Cake") || res.json(errs))
    // },
    // updateCake: function(req, res){
    //     Cake.findByIdAndUpdate(req.params.id, req.body)
    //     .then(data => console.log(data) || res.json(data))
    //     .catch(errs => console.log("Can not update") || res.json(errs))
    // },

}