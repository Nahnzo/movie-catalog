const { Schema, model } = require("mongoose");
const MovieSchema = require("../models/movie-model");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  movies: {
    myCollection: [Schema.Types.Mixed],
    // myCollection: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
    // myReviews: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
    // wantToSee: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  },
});

module.exports = model("User", UserSchema);
