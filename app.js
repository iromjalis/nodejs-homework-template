const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
// объект отправляет почту
const sendEmail = require("./helpers");
const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2255
  secure: true,
  auth: {
    user: "iromjalis@gmail.com",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "hello@hello.com",
  subject: "Новая заявка с сайта",
  html: "<p>Новая заявка с сайта </p>",
};
sendEmail(email);
transporter.sendMail(email);

transporter
  .sendMail(email)
  .then(() => {
    console.log("Email send successfully");
  })
  .catch((error) => console.log(error.message));

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");
const upload = require("./middlewares/upload");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/users", authRouter);
app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.post("/api/contacts", upload.single("image"), async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(productsDir, originalname);
  try {
    await fs.rename(tempUpload, resultUpload);
    const image = path.join("contacts", originalname);
    const newContact = {
      name: req.body.name,
      id: v4(),
      image,
    };
    products.push(newContact);

    res.status(201).json(newContact);
  } catch (error) {
    await fs.unlink(tempUpload);
  }
});
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
