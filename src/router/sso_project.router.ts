/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 21:27:51
 * @LastEditTime: 2021-05-01 22:13:21
 * @LastEditors: mTm
 */
import * as Router from 'koa-router';

import { verifyAuth } from '../middleware/auth.middleware'
import commonController from '../controller/common.controller'
import { createHandler } from '../middleware/sso_project.middleware'

import { CreateConfig } from '../config/router/sso_project.router.config'

const ssoProjectRouter = new Router({prefix: '/sso-project'})

ssoProjectRouter.post('/', verifyAuth, createHandler, commonController.create(CreateConfig));

export default ssoProjectRouter;