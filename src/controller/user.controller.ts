/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-13 22:55:27
 * @LastEditTime: 2021-05-01 20:34:56
 * @LastEditors: mTm
 */
import { Context } from 'koa';
import { ControllerUser } from '../interface/class/user.interface.class'
import service from '../service/user.service';


import md5password from '../units/password-handle'

class UserController implements ControllerUser {
    async list(ctx: Context, next: () => Promise<any>) {
        try {
            const { name = '', offset, size } = ctx.query;
            const result = await service.list(name as string, offset as string, size as string);
            ctx.body = {
                message: '获取用户列表成功',
                data: result,
                meta: {
                    total: 0, 
                    page: 1,
                    pageSize: 10,
                    maxPage: 1,
                }
            }
        } catch (error) {
            ctx.app.emit('error', error, ctx);
        }
    }
    async create(ctx: Context, next: () => Promise<any>) {
        try {
            const { user, password } = ctx.request.body;
            // 查询数据
            await service.create(user, password);
            // 返回数据
            ctx.body = {
                messgae: '用户注册成功！',
                user: {
                    user,
                    password
                },
            }
        } catch (error) {
            ctx.app.emit('error', error, ctx)
        }
    }

    async update(ctx: Context, next: () => Promise<any>) {
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
}

export default new UserController();