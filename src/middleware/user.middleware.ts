/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-19 23:06:55
 * @LastEditTime: 2021-05-01 22:14:48
 * @LastEditors: mTm
 */
import { Context } from 'koa'

import md5password from '../units/password-handle'

import {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_ALREADY_EXISTS,
} from '../constants/error-types'

import service from '../service/user.service'

const verifyUser = async (ctx: Context, next: () => Promise<any>) => {
    try {
        // 1.获取用户名和密码
        const { user, password } = ctx.request.body;
        // 2.判断用户名或者密码不能空
        if (!user || !password) {
            ctx.app.emit('error', new Error(NAME_OR_PASSWORD_IS_REQUIRED), ctx)
            return false;
        }
        // 3.判断这次注册的用户名是没有被注册过
        try {
            const result = await service.getUserByName(user)
            if (Array.isArray(result) && result.length) {
                ctx.app.emit('error', new Error(USER_ALREADY_EXISTS), ctx)
                return false;
            }
            await next();
        } catch (error) {
            ctx.app.emit('error', new Error('123'), ctx);
        }
    } catch (error) {
        ctx.app.emit('error', error, ctx);
    }
}

const updateHandler = async (ctx: Context, next: () => Promise<any>) => {
    try {
        ctx.params.userId = ctx.user.id;

        if (ctx.request.body.password) {
            ctx.request.body.password = md5password(md5password(ctx.request.body.password))
        }
        
        await next()
    } catch (error) {
        ctx.app.emit('error', error, ctx)
    }
} 

export {
    verifyUser,
    updateHandler,
}
 