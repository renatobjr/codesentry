import express from "express";
import controller from "../controllers/file";
import isAuth from "../middleware/isAuth";

const route = express.Router();

route.post("/upload", isAuth, controller.upload);

export default route;
