import express from "express";
import controller from "../controllers/issue";
import isAuth from "../middleware/isAuth";

const route = express.Router();

route.get('/list', isAuth, controller.list);
route.post('/create', isAuth, controller.create);

export default route;
