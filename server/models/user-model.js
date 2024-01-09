const { Schema, model } = require("mongoose");
const MovieSchema = require("../models/movie-model");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  movies: {
    myCollection: [Schema.Types.Mixed],
    myReviews: [Schema.Types.Mixed],
    wantToSee: [Schema.Types.Mixed],
  },
});

module.exports = model("User", UserSchema);
