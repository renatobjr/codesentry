import express from 'express';
import controller from '../controllers/user';

const routes = express.Router();

routes.post('/create', controller.create);
routes.put('/update/:id', controller.update);
routes.get('/list', controller.list);
routes.get('/get/:id', controller.get);

export default routes;