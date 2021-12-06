/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-19 09:46:30
 * @LastEditTime: 2021-12-06 21:58:01
 * @LastEditors: mTm
 */
import { Context } from 'koa'
interface ServiceUser {
    list(name: string, offset: string, size: string): Promise<any>;
    create(user: string, password: string, email?:string): Promise<any>;
    getUserByName(name: string): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
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