const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");
//* создать web-сервер
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
//*  запустить сервер
// app.listen(3001, () => console.log("Server is running"));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Not found" } = err;
  res.status(status).json({ message });
});

module.exports = app;
//* если запрос начинается с api/products, ищи его обработчик здесь
// app.use("/api/products", productsRouter);
// app.use("/api/contacts", contactsRouter);

//* /сначала выполнится это/ MIDDLEWARE
// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
// ищи дальше
//   next();
// });

//* /потом это/ если прийдет GET запрос на адрес /. выполнить эту функцию
// app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1>");
// });

// app.get("/products", (req, res) => {
//   //! отправка {} или [] = res.json
// остальное res.send
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       result: products,
//     },
//   });
// });
