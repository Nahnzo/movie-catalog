const User = require("../models/user-model");
const Movie = require("../models/movie-model");

class MovieService {
  async addMoviesToUser(userId, movieIds) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("Пользователь не найден");
      }
      const movies = await Movie.find({ _id: { $in: movieIds } });
      if (movies.length !== movieIds.length) {
        throw new Error("Не все фильмы найдены");
      }
      user.movies.push(...movies);
      await user.save();
      return "Фильмы успешно добавлены пользователю";
    } catch (error) {
      throw new Error(`Ошибка при добавлении фильмов пользователю: ${error.message}`);
    }
  }
}

module.exports = new MovieService();
