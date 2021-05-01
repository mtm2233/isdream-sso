/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-28 22:29:00
 * @LastEditTime: 2021-05-01 22:10:49
 * @LastEditors: mTm
 */
import * as Router from 'koa-router'

import authController from '../controller/auth.controller';

import {
    verifyLogin,
    verifyAuth,
} from '../middleware/auth.middleware'

const authRouter = new Router();

authRouter.post('/login', verifyLogin, authController.login);
authRouter.post('/logout', verifyAuth, authController.logout);

export default authRouter;