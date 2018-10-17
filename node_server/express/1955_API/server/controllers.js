const Api  = require('./models');
module.exports = {
    showAll: (req, res) => {
        Api.find({}, (err, people) => {
          if (err) {res.json(err);}
          else {res.json(people);
          }
        })
      },
      add: (req, res) => {
        let person = new Api({name: req.params.name});
        let promise = person.save();
    
        promise.then((doc) => {
          res.json("added!" + doc);
        })
        promise.catch((err) => {
          res.json(err);
        })
      },
      remove: (req, res)=> {
          Api.remove({name: req.params.name},(err, person)=> {
              if(err){ 
                res.json(err);
            }
            else{ 
                res.json(person);
            }
          })
      },
      showOne: (req,res)=> {
          Api.findOne({name: req.params.name},(err,person)=>{
              if(err){
                  res.json(err);
              }
              else{res.json(person);
            }
          })
      }







    //   show: (req, res) => {
    //     Person.findOne({name: req.params.name}, (err, person) => {
    //       if (err) {
    //         res.json(err);
    //       }
    //       else {
    //         res.json(person);
    //       }
    //     })
    //   },
    //   remove: (req, res) => {
    //     Person.remove({name: req.params.name}, (err) => {
    //       if (err) {
    //         console.log("Issue deleting: " + err);
    //       }
    //       else {
    //         res.redirect('/');
    //       }
    //     })
    //   }

}