const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
mongoose.promise = Promise

const userSchema = new Schema({
  username: { type: String },
  password: {type: String }
});

// On save hook, encrypt password
userSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});

userSchema.methods = {
  checkPassword: function(inputPassword){
    console.log("user.js, userSchema.checkPassword");
    console.log("inputPassword: ", inputPassword);
    return (bcrypt.compareSync(inputPassword, this.password));
  },
  hashPassword: plainTextPassword => (bcrypt.hashSync(plainTextPassword, 10))
}

const User = mongoose.model("user", userSchema);

module.exports = User;