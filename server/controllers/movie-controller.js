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
        collection.push(req.body);
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
    console.log(123123);
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
        collection.splice(indexToRemove, 1); // Удаляем фильм из коллекции
        await user.save();
        return res.status(200).json({ message: "Фильм успешно удален из коллекции пользователя" });
      } else {
        return res.status(400).json({ error: "Фильм не найден в коллекции пользователя" });
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new MovieController();
