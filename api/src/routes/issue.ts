import express from "express";
import controller from "../controllers/issue";
import isAuth from "../middleware/isAuth";

const route = express.Router();

route.get('/list', isAuth, controller.list);
route.get('/get/:id', isAuth, controller.get);
route.post('/create', isAuth, controller.create);
route.put('/update/:id', isAuth, controller.update);
route.post('/remove/:id', isAuth, controller.remove)

export default route;
