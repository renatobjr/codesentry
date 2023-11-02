import express from 'express';
import controller from '../controllers/auth';

const route = express.Router();

route.post('/login', controller.login);
route.get('/session', controller.session);
route.post('/verify-email', controller.verifyEmail);
route.post("/verify-code", controller.verifyCode);
route.post("/resend-code", controller.resendCode);
route.post("/set-password", controller.setPassword);
route.post("/subscribe", controller.subscribe);

export default route;