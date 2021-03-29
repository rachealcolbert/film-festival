const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const movieSchema = require("./Movie");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    savedMovies: [movieSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    try {
      console.log("checking users");
      return bcrypt.compare(password, this.password);
    } catch (ex) {
      console.log(ex);
    }
  };

  // when we query a user, we'll also get another field called `movieCount` with the number of saved movies we have
  userSchema.virtual("movieCount").get(function () {
    return this.savedMovies.length;
  });

  next();
});

const User = model("User", userSchema);

module.exports = User;
