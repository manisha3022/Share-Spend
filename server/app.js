const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./routes/users.js");
const expensesRouter = require("./routes/expenses.js");
const debtsRouter = require("./routes/debts.js");
const authRoute = require("./routes/auth.js");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use("/api/auth", authRoute);
app.use(usersRouter);
app.use(expensesRouter);
app.use(debtsRouter);

// !IMPORTANT: Create .env file with password
const password = process.env.PASSWORD ;
var mongoDB = process.env.MONGODB_URI;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => handleError(error));
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected successfully.");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at port ${port}.`);
});

module.exports = app;
