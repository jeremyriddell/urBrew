const db = require("../models");

module.exports = {
  createUser: (req, res) => {
    console.log("In your controller now.")
    let newUser = {
      username: req.body.username,
      password: req.body.password
    }
    console.log(newUser);

    //create new user object
    const user = new db.User(newUser);
    // save the user
    user.save().then(user => {
      // respond with the success if the user existed
      res.json({ message: "success"});
    });


    // db.User
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => {
    //     console.log("this is our error inside create: ", err);
    //     res.status(422).json(err)
    //   });
  }
}