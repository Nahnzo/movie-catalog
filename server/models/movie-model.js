const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  ageRating: Number,
  alternativeName: String,
  audience: [{ count: Number, country: String }],
  backdrop: {
    previewUrl: String,
    url: String,
  },
  budget: {
    currency: String,
    value: Number,
  },
  color: String,
  countries: [
    {
      name: String,
    },
  ],
  deletedAt: Date,
  description: String,
  distributors: {
    distributor: String,
    distributorRelease: String,
  },
  externalId: {
    imdb: String,
    tmdb: Number,
  },
  fees: {
    russia: {
      value: Number,
      currency: String,
    },
    usa: {
      value: Number,
      currency: String,
    },
    world: {
      value: Number,
      currency: String,
    },
  },
  genres: [
    {
      name: String,
    },
  ],
  id: Number,
  images: {
    framesCount: Number,
  },
  imagesInfo: {
    framesCount: Number,
  },
  isSeries: Boolean,
  lists: [String],
  logo: {
    url: String,
  },
  movieLength: Number,
  name: String,
  names: [
    {
      name: String,
      language: String,
      type: String,
    },
  ],
  networks: String,
  persons: [
    {
      id: Number,
      photo: String,
      name: String,
      enName: String,
      description: String,
    },
  ],
  poster: {
    previewUrl: String,
    url: String,
  },
  premiere: {
    bluray: Date,
    dvd: Date,
    russia: Date,
    world: Date,
  },
  productionCompanies: [
    {
      name: String,
      url: String,
      previewUrl: String,
    },
  ],
  rating: {
    await: Boolean,
    filmCritics: Number,
    imdb: Number,
    kp: Number,
    russianFilmCritics: Number,
  },
  ratingMpaa: String,
  seasonsInfo: [],
  sequelsAndPrequels: [],
  seriesLength: Number,
  shortDescription: String,
  similarMovies: [
    {
      id: Number,
      name: String,
      enName: String,
      alternativeName: String,
      type: String,
    },
  ],
  slogan: String,
  spokenLanguages: [
    {
      name: String,
      nameEn: String,
    },
  ],
  status: String,
  subType: String,
  technology: {
    has3D: Boolean,
    hasImax: Boolean,
  },
  ticketsOnSale: Boolean,
  top10: String,
  top250: Number,
  totalSeriesLength: Number,
  type: String,
  typeNumber: Number,
  updateDates: [Date],
  updatedAt: Date,
  videos: {
    trailers: [
      {
        url: String,
      },
    ],
  },
  votes: {
    await: Number,
    filmCritics: Number,
    imdb: Number,
    kp: Number,
    russianFilmCritics: Number,
  },
  watchability: {
    items: [
      {
        name: String,
        url: String,
        logo: { url: String },
      },
    ],
  },
  year: Number,
});

module.exports = model("Movie", MovieSchema);
