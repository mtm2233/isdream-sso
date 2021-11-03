/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-13 22:55:27
 * @LastEditTime: 2021-11-03 21:13:19
 * @LastEditors: mTm
 */
import { Context } from 'koa';
import { ControllerUser } from '../interface/class/user.interface.class'
import service from '../service/user.service';

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

    async auth(ctx: any, next: () => Promise<any>) {
        ctx.body = {
            messgae: 'token正常'
        }
    }
}

export default new UserController();