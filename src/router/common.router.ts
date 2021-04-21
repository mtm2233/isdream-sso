/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:28:56
 * @LastEditTime: 2021-04-22 00:08:28
 * @LastEditors: mTm
 */
import * as Router from 'koa-router'

import commonController from '../controller/common.controller'

const commonRouter = new Router({prefix: '/common'})

commonRouter.post('/', commonController.create({
    database: 'article',
    where: [],
    data: []
}))

commonRouter.delete('/:id', commonController.remove({
    database: 'article',
    where: [],
}))

commonRouter.get('/', commonController.list({
    database: 'article',
    where: [],
}))

commonRouter.patch('/:id', commonController.update({
    database: 'article',
    where: [],
    data: []
}))

commonRouter.get('/:id', commonController.detail({
    database: 'article',
    where: [],
}))

export default commonRouter