const express = require('express');
const beerRoutes = express.Router();
const Beer = require('../../controllers/fridgeController')
// Require Business model in our routes module
let Beer = require('../../models/fridge');

// Defined store route
beerRoutes.route('/add').post(function (req, res) {
  let beer = new Beer(req.body);
  beer.save()
    .then(beer => {
      res.status(200).json({'beer': 'beer added'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Beer.find(function(err, beer){
    if(err){
      console.log(err);
    }
    else {
      res.json(beers);
    }
  });
});


//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, beer) {
    if (!beer)
      res.status(404).send("data is not found");
    else {
        beer.beer_name = req.body.beer_name;
        beer.brewery = req.body.brewery;
        beer.size = req.body.size;
        beer.quantity = req.body.quantity

        beer.save().then(beer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
beerRoutes.route('/delete/:id').get(function (req, res) {
    Beer.findByIdAndRemove({_id: req.params.id}, function(err, beer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = beerRoutes;