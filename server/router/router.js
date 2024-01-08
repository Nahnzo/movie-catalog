const Router = require("express").Router;
const movieController = require("../controllers/movie-controller");
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/user/:userId/movies", userController.getUserMovies);
router.post("/user/:userId/movies/:collectionType/add", movieController.addToUserCollection);
router.delete("/user/:userId/movies/:collectionType/delete", movieController.removeMovieFromCollection);
// router.post("/users/:userId/movies/collection", movieController.addToUserCollection);

module.exports = router;
