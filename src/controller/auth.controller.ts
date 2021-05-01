/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-19 23:51:40
 * @LastEditTime: 2021-05-01 22:08:59
 * @LastEditors: mTm
 */
import * as jwt from 'jsonwebtoken'

import { Context } from 'koa'
import { ControllerAuth } from '../interface/class/auth.interface.class'

import { PRIVATE_KEY } from '../app/config'

import ssoService from '../service/sso.service'

class AuthController implements ControllerAuth {
    async login(ctx: Context, next: () => Promise<any>) {
        try {
            const { id, user } = ctx.user;
            const token = jwt.sign({id, user}, PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 60 * 60 * 24 * 7
            })

            await ssoService.create(token, id)

            ctx.body = {
                id,
                user,
                token,
            }
        } catch (error) {
            ctx.app.emit('error', error, ctx);
        }
    }

    async logout(ctx: Context, next: () => Promise<any>) {
        try {
            const { id } = ctx.user;

            await ssoService.remove(id)
            ctx.body = {
                message: '登出成功~'
            }
            
        } catch (error) {
            ctx.app.emit('error', error, ctx);
        }
    }
}

export default new AuthController();