/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-13 23:38:29
 * @LastEditTime: 2021-04-22 22:37:46
 * @LastEditors: mTm
 */
import { Context } from 'koa'

const limit = async (ctx: Context, next: () => Promise<any>) => {
    const { page = 1, pageSize = 10 } = ctx.query;
    ctx.query.offset = `${(Number(page) - 1) * Number(pageSize)}`;
    ctx.query.size = `${pageSize}`;
    ctx.meta = {
        pageSize,
        page,
    }
    await next();
}

export {
    limit
}