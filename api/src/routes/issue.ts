import express from "express";
import controller from "../controllers/issue";
import isAuth from "../middleware/isAuth";

const route = express.Router();

route.get('/list', isAuth, controller.list);
route.get('/get/:id', isAuth, controller.get);
route.post('/create', isAuth, controller.create);
route.put('/update/:id', isAuth, controller.update);
route.post('/remove/:id', isAuth, controller.remove)
// Notes
route.put('/notes/add/:id', isAuth, controller.notes.add);
// Files 
route.put('/files/add/:id', isAuth, controller.files.add);

export default route;
