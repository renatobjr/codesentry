import express from 'express';
import controller from '../controllers/auth';

const routes = express.Router();

routes.post('/login', controller.login);
routes.get('/session', controller.session);
routes.post('/verify', controller.verify);
routes.post("/verify-code", controller.verifyCode);
routes.post("/resend-code", controller.resendCode);
routes.post("/set-password", controller.setPassword);

export default routes;