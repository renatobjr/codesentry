import express from 'express';
import controller from '../controllers/auth';

const routes = express.Router();

routes.post('/login', controller.login);
routes.get('/session', controller.session);
routes.post('/verify-email', controller.verifyEmail);
routes.post("/verify-code", controller.verifyCode);
routes.post("/resend-code", controller.resendCode);
routes.post("/set-password", controller.setPassword);
routes.post("/subscribe", controller.subscribe);

export default routes;