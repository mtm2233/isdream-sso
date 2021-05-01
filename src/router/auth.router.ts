/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-28 22:29:00
 * @LastEditTime: 2021-04-19 23:54:53
 * @LastEditors: mTm
 */
import * as Router from 'koa-router'

import authController from '../controller/auth.controller';

import {
    verifyLogin,
} from '../middleware/auth.middleware'

const authRouter = new Router();

authRouter.post('/login', verifyLogin, authController.login);

export default authRouter;