const userModel = require("../models/user-model");

class MovieController {
  async addToUserCollection(req, res, next) {
    try {
      const { userId, collectionType } = req.params;
      const movieTarget = req.body;
      const user = await userModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }

      let collection;
      switch (collectionType) {
        case "myCollection":
          collection = user.movies.myCollection;
          break;
        case "myReviews":
          collection = user.movies.myReviews;
          break;
        case "wantToSee":
          collection = user.movies.wantToSee;
          break;
        default:
          return res.status(400).json({ error: "Недопустимый тип коллекции" });
      }

      if (!collection.some((movie) => movie.id === movieTarget.id)) {
        if (collectionType === "myReviews") {
          const newMovie = { ...movieTarget, userReview: "" }; // Устанавливаем пустую рецензию
          collection.push(newMovie);
        } else {
          collection.push(movieTarget);
        }
        await user.save();
        return res.status(200).json({ message: "Фильм успешно добавлен в коллекцию пользователя" });
      } else {
        return res.status(400).json({ error: "Фильм уже добавлен в коллекцию пользователя" });
      }
    } catch (error) {
      next(error);
    }
  }
  async removeMovieFromCollection(req, res, next) {
    try {
      const { userId, collectionType } = req.params;
      const movieIdToRemove = req.body.id;
      const user = await userModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }

      let collection;
      switch (collectionType) {
        case "myCollection":
          collection = user.movies.myCollection;
          break;
        case "myReviews":
          collection = user.movies.myReviews;
          break;
        case "wantToSee":
          collection = user.movies.wantToSee;
          break;
        default:
          return res.status(400).json({ error: "Недопустимый тип коллекции" });
      }
      const indexToRemove = collection.findIndex((movie) => movie.id === movieIdToRemove);
      if (indexToRemove !== -1) {
        collection.splice(indexToRemove, 1);
        await user.save();
        return res.status(200).json({ message: "Фильм успешно удален из коллекции пользователя" });
      } else {
        return res.status(400).json({ error: "Фильм не найден в коллекции пользователя" });
      }
    } catch (error) {
      next(error);
    }
  }
  async removeEntireListCollection(req, res, next) {
    try {
      const { userId, collectionType } = req.params;
      const user = await userModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }
      switch (collectionType) {
        case "myCollection":
          user.movies.myCollection = [];
          break;
        case "myReviews":
          user.movies.myReviews = [];
          break;
        case "wantToSee":
          user.movies.wantToSee = [];
          break;
        default:
          return res.status(400).json({ error: "Недопустимый тип коллекции" });
      }
      await user.save();
      return res.status(200).json({ message: "Коллекция успешно очищена" });
    } catch (error) {
      next(error);
    }
  }
  async addReview(req, res, next) {
    try {
      const { userId } = req.params;
      const { movieId, userReview } = req.body;
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }
      const movieIndex = user.movies.myReviews.findIndex((movie) => movie.id === movieId);
      if (movieIndex === -1) {
        return res.status(404).json({ error: "Фильм не найден в коллекции пользователя" });
      } else {
        user.movies.myReviews = user.movies.myReviews.map((movie) => {
          if (movie.id === movieId) {
            return { ...movie, userReview: userReview };
          }
          return movie;
        });

        await user.save();
      }
      return res.status(200).json({ message: "Рецензия успешно изменена" });
    } catch (error) {
      next(error);
    }
  }
  async addRating(req, res, next) {
    try {
      const { userId } = req.params;
      const { movieId, userRating } = req.body;
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "Пользователь не найден" });
      }
      const movieIndex = user.movies.myCollection.findIndex((movie) => movie.id === movieId);
      if (movieIndex === -1) {
        return res.status(404).json({ error: "Фильм не найден в коллекции пользователя" });
      } else {
        user.movies.myCollection = user.movies.myCollection.map((movie) => {
          if (movie.id === movieId) {
            return { ...movie, userRating: userRating };
          }
          return movie;
        });

        await user.save();
      }
      return res.status(200).json({ message: "Рейтинг успешно изменен" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new MovieController();
