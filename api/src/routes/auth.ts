import express from 'express';
import controller from '../controllers/auth';

const routes = express.Router();

routes.post('/login', controller.login);
routes.get('/session', controller.session);

export default routes;