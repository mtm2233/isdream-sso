/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:28:56
 * @LastEditTime: 2021-04-22 22:59:22
 * @LastEditors: mTm
 */
import * as Router from 'koa-router'

import commonController from '../controller/common.controller'

import {
    createConfig,
    removeConfig,
    listConfig,
    updateConfig,
    detailConfig,
} from '../config/router/common.router.config'

const commonRouter = new Router({prefix: '/common'})

commonRouter.post('/', commonController.create(createConfig))

commonRouter.delete('/:articleId', commonController.remove(removeConfig))

commonRouter.get('/', commonController.list(listConfig))

commonRouter.patch('/:articleId', commonController.update(updateConfig))

commonRouter.get('/:articleId', commonController.detail(detailConfig))

export default commonRouter