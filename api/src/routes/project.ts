import express from 'express';
import controller from '../controllers/project';
import isAuth from '../middleware/isAuth';

const route = express.Router();

route.post('/create', isAuth, controller.create);
route.put('/update/:id', isAuth, controller.update);
route.get('/list', isAuth, controller.list);
route.get('/get/:id', isAuth, controller.get);
route.post('/remove/:id', isAuth, controller.remove);

export default route;