/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-10 23:50:09
 * @LastEditTime: 2021-05-01 22:15:13
 * @LastEditors: mTm
 */
import * as Router from 'koa-router';

import userController from '../controller/user.controller'
import commonConttroller from '../controller/common.controller'
import { limit } from '../middleware/list.middleware'
import { verifyAuth } from '../middleware/auth.middleware'
import { verifyUser, updateHandler } from '../middleware/user.middleware'
import { updateConfig } from '../config/router/user.router.config'

const userRouter = new Router({prefix: '/user'});

userRouter.post('/', verifyUser, userController.create);
userRouter.patch('/', verifyAuth, updateHandler, commonConttroller.update(updateConfig));
userRouter.get('/list', verifyAuth, limit, userController.list);

export default userRouter;