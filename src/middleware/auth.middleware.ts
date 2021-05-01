/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-28 22:38:58
 * @LastEditTime: 2021-05-01 21:50:11
 * @LastEditors: mTm
 */
import * as jwt from 'jsonwebtoken';
import { Context } from 'koa'

import authService from '../service/auth.service'
import userService from '../service/user.service'
import md5password from '../units/password-handle'

import { PUBLIC_KEY } from '../app/config'
import { 
    UN_AUTH_ORIZATION,
    CONTENT_DOES_NOT_EXISTS,
    UN_AUTH_PERMISSION,
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_DOES_NOT_EXISTS,
    PASSWORD_IS_INCORRENT
} from '../constants/error-types'

import ssoService from '../service/sso.service'


const verifyLogin = async (ctx: Context, next: () => Promise<any>) => {
    try {
        // 1.获取用户名和密码
        const { user, password } = ctx.request.body;
        // 2.判断用户名或者密码不能空
        if (!user || !password) {
            ctx.app.emit('error', new Error(NAME_OR_PASSWORD_IS_REQUIRED), ctx)
            return false;
        }

        // 3.判断用户名是否没有被注册
        const result = await userService.getUserByName(user)
        const userInfo = (result as any)[0]
        if (!userInfo) {
            ctx.app.emit('error', new Error(USER_DOES_NOT_EXISTS), ctx)
            return false;
        }

        if(userInfo.password !== md5password(md5password(password))) {
            ctx.app.emit('error', new Error(PASSWORD_IS_INCORRENT), ctx)
            return false;
        }

        ctx.user = userInfo;

        await next();
    } catch (error) {
        ctx.app.emit('error', error, ctx)
    }
}

const verifyAuth = async (ctx: Context, next: () => Promise<any>) => {
    try {
        const token = ctx.headers?.authorization?.replace('Bearer ', '');

        if (token) {
            const result = await ssoService.isExists(token)
            if (!result) {
                ctx.app.emit('error', new Error(UN_AUTH_ORIZATION), ctx);
                return false;
            }
        }

        const user = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
         
        ctx.user = user;
        await next()
    } catch(error) {
        ctx.app.emit('error', new Error(UN_AUTH_ORIZATION), ctx);
    }
}

const verifyPermission = async (ctx: Context, next: () => Promise<any>) => {
    try {
        const params = ctx.params;
        const [key] = Object.keys(params);
        const tableName = key.replace('Id', '');
        const id = params[key];
        const userId = ctx.user.id;

        const isExistsResult = await authService.isExists(tableName, id);
        if (!isExistsResult) {
            ctx.app.emit('error', new Error(CONTENT_DOES_NOT_EXISTS), ctx);
            return false;
        }
        
        const result = await authService.authPermission(tableName, id, userId);
        if (!result) {
            ctx.app.emit('error', new Error(UN_AUTH_PERMISSION), ctx);
            return false;
        }

        await next();
    } catch (error) {
        ctx.app.emit('error', error, ctx)
    }
}

export {
    verifyLogin,
    verifyAuth,
    verifyPermission
}