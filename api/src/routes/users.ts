import express from 'express';
import controller from '../controllers/user';
import isAuth from '../middleware/isAuth';

const routes = express.Router();

routes.post('/create', isAuth, controller.create);
routes.put('/update/:id', controller.update);
routes.get('/list', isAuth, controller.list);
routes.get('/get/:id', isAuth, controller.get);
routes.post('/remove/:id', isAuth, controller.remove);
routes.post('/approve/:id', isAuth, controller.approve);

export default routes;