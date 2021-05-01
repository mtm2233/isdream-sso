/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 22:12:09
 * @LastEditTime: 2021-05-01 22:12:53
 * @LastEditors: mTm
 */
import { Context } from 'koa';
import ssoService from '../service/sso.service'

const createHandler = async (ctx: Context, next: () => Promise<any>) => {
    try {
        const token = ctx.headers?.authorization?.replace('Bearer ', '');
        const sso_id = await ssoService.isExists(token)
        
        ctx.request.body.sso_id = sso_id;
        await next();
    } catch (error) {
        ctx.app.emit('error', error, ctx)
    }
}

export {
    createHandler
}