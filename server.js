// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// CONFIGURATION
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const app = express();

mongoose.connect(MONGO_URI).then(() => {
  console.log(`Connected to mongo: ${MONGO_URI}`);
});

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const booksController = require("./controllers/book_controllers.js");
app.use("/books", booksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Hello World! API");
});

// LISTEN
app.listen(PORT, () => {
  console.log("Greetings! From port: ", PORT);
});
