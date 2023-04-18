import Router from 'express';
import { authController } from '../controllers/authController.js'

export const routerAuth = new Router();

routerAuth.post('/reg', authController.registration)
routerAuth.post('/login', authController.login)