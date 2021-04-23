/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:28:56
 * @LastEditTime: 2021-04-23 14:23:21
 * @LastEditors: mTm
 */
import * as Router from 'koa-router'

import commonController from '../controller/common.controller'

import { verifyAuth, verifyPermission } from '../middleware/auth.middleware'

import {
    createConfig,
    removeConfig,
    listConfig,
    updateConfig,
    detailConfig,
} from '../config/router/common.router.config'

const commonRouter = new Router({prefix: '/common'})

commonRouter.post('/', verifyAuth, commonController.create(createConfig))

commonRouter.delete('/:articleId', verifyAuth, verifyPermission, commonController.remove(removeConfig))

commonRouter.get('/', commonController.list(listConfig))

commonRouter.patch('/:articleId', verifyAuth, verifyPermission, commonController.update(updateConfig))

commonRouter.get('/:articleId', commonController.detail(detailConfig))

// commonRouter.post('/', commonController.create(createConfig))

// commonRouter.delete('/:articleId', commonController.remove(removeConfig))

// commonRouter.get('/', commonController.list(listConfig))

// commonRouter.patch('/:articleId', commonController.update(updateConfig))

// commonRouter.get('/:articleId', commonController.detail(detailConfig))

export default commonRouter