const db = require("../models");

module.exports = {
    createUser: (req, res ) => {
        console.log("In your controller now.")
        let newUser = {
            username: req.body.username,
            password: req.body.password
        }
        console.log(newUser);

    
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          console.log("this is our error inside create: ", err);
          res.status(422).json(err)
        });    }
}