const { Schema, model, Types: { ObjectId } } = require("mongoose");
const validator = require("validator");


const userSchema = new Schema({
  username: {
    type: String,
    minLength: [6, "Username should be minumum 6 characters long"],
  },
  email: {
    type: String,
    required: true,
    lowercase:true,
    nimLength:[10,"Email should be minumum 10 characters long"],
    validate: {
      validator: function (adress) {
        return validator.isEmail(adress);
      },
      message: "Invalid email adress",
    },
  },
  country: {
    type: String,
    required: true,
    minLength: [3, "Country should be minumum 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password should be minimum 8 characters long"],
  },
  likes: [{ type: ObjectId, ref: "Destination" }],
  comments: [{ type: ObjectId, ref: "Comment" }],
});

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

module.exports = model("User", userSchema);