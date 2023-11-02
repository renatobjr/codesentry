import express from 'express';
import controller from '../controllers/project';
import isAuth from '../middleware/isAuth';

const route = express.Router();

route.post('/create', isAuth, controller.create);

export default route;