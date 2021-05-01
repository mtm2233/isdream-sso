/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-19 09:28:52
 * @LastEditTime: 2021-05-01 18:54:27
 * @LastEditors: mTm
 */
import { Context } from 'koa'

interface ServiceAuth {
    isExists(tableName: string, id: number): Promise<boolean>;
    authPermission(tableName: string, id: number, userId: number): Promise<boolean>;
}

interface ControllerAuth {
    login(ctx: Context, next: () => Promise<any>): Promise<any>;
}

export {
    ServiceAuth,
    ControllerAuth,
}