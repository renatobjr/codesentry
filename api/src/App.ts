import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import mongoose, { ConnectOptions } from "mongoose";
import users from "./routes/users";
import auth from "./routes/auth";
import projects from "./routes/project"; 
import issues from "./routes/issue";
import files from "./routes/file";
import multer from "multer";
import dbSeed from "./models/dbSeed";

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const app = express();

app.use(cors());
app.use(bodyParser.json({
  limit: "50mb",
}));

app.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb",
}))

app.use(bodyParser.json());
app.use(
  multer({
    dest: path.join(__dirname, "../public/files"),
    limits: {
      fieldSize: 1024 * 100,
    },
  }).any()
);

app.get("/", (req: any, res: any) => {
  res.send({ status: "codesetry is online" });
});

app.use(express.static(path.join(__dirname, "../public")));
app
  .use("/auth", auth)
  .use("/users", users)
  .use("/issues", issues)
  .use("/projects", projects)
  .use("/files", files);

const mongoUrl: any =
  process.env.NODE_ENV != "development" && process.env.NODE_ENV != "test"
    ? process.env.MONGO_URL
    : process.env.MONGO_URL_TEST;
const port = +(process.env.PORT ?? 3000);

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {

    app.listen(port, () => {
      console.log(`Listen on http://localhost:${port}`);
      dbSeed.seed();
    });
  });
