const db = require("../models");

module.exports = {
    createUser: (req, res ) => {
        console.log(db.User);

        console.log(req.body);

        db.User.create(req.body)
        .then(dbModel => console.log(dbModel))
        .catch(err => res.status(422).json(err))
    }
}