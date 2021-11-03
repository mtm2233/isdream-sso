/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-19 09:46:30
 * @LastEditTime: 2021-11-03 21:13:18
 * @LastEditors: mTm
 */
import { Context } from 'koa'
interface ServiceUser {
    list(name: string, offset: string, size: string): Promise<any>;
    create(user: string, password: string): Promise<any>;
    getUserByName(name: string): Promise<any>;
}

interface ControllerUser {
    list(ctx: Context, next: () => Promise<any>): Promise<any>;
    create(ctx: Context, next: () => Promise<any>): Promise<any>;
    auth(ctx: Context, next: () => Promise<any>): Promise<any>;
}

export {
    ServiceUser,
    ControllerUser,
}