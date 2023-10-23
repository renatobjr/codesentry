import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import mongoose, { ConnectOptions } from "mongoose";

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send({ status: "codesetry is online" });
});

const mongoUrl: any =
  process.env.NODE_ENV != "test"
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
    });
  });