const cors = require("cors");
const express = require("express");

const userRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");
const postRouter = require("./routes/post.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.get("/", (request, response) => {
  response.json({
    message: "proyecto backend APIv1",
  });
});

module.exports = app;
