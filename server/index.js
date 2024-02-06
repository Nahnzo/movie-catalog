require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/router");
const errorMiddleware = require("./middlewares/error-middleware");
// const compression = require("compression");

const PORT = process.env.PORT || 5000;
const app = express();
// app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Сервер работает на ${PORT} порту`));
  } catch (error) {
    console.log(error);
  }
};

start();
