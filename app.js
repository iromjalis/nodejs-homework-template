const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const SECRET_KEY = "UPgw2t7TVK";
const payload = {
  id: "123",
};
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
try {
  const result = jwt.verify(`${token}22`, SECRET_KEY);
} catch (error) {
  console.log(error.message);
}

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api/users", authRouter);
app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
