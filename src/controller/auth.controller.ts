/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-19 23:51:40
 * @LastEditTime: 2021-04-20 00:01:24
 * @LastEditors: mTm
 */
import * as jwt from 'jsonwebtoken'

import { Context } from 'koa'
import { ControllerAuth } from '../interface/class/auth.interface.class'

import { PRIVATE_KEY } from '../app/config'

class AuthController implements ControllerAuth {
    async login(ctx: Context, next: () => Promise<any>) {
        const { id, user } = ctx.user;
        const token = jwt.sign({id, user}, PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 60 * 60 * 24 * 7
        })
        ctx.body = {
            id,
            user,
            token,
        }
    }
}

export default new AuthController();