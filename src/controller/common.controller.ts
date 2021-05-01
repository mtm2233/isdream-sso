/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:30:39
 * @LastEditTime: 2021-05-01 20:31:09
 * @LastEditors: mTm
 */
import { Context } from 'koa'
import { ControllerCommon } from '../interface/class/common.interface.class'

import { MISSING_PARAMETER } from '../constants/error-types'

import service from '../service/common.service'

import { 
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig,
} from '../interface/common.interface'

class CommonController implements ControllerCommon {
    create(config: CreateConfig) {
        return async (ctx: Context, next: () => Promise<any>) => {
            try {
                const body = ctx.request.body;
                // 读取传递的值 | 默认值
                const data = config.data.map((v) => ({
                    ...v,
                    val: body[v.key] || v.val,
                }))

                // 校验是否缺少参数
                const missParams = data.filter(v => v.require && !v.val);
                if (missParams.length) {
                    ctx.app.emit('error', new Error(MISSING_PARAMETER), ctx);
                    return false;
                }

                // 去除val为undefined的元素
                config.data = data.filter(v => v.val !== undefined);
                
                // 添加 操作数据库
                await service.create(config)

                ctx.status = 201;
                ctx.body = {
                    message: '添加成功'
                }
            } catch (error) {
                ctx.app.emit('error', error, ctx);
            }
        }
    }

    remove(config: RemoveConfig) {
        return async (ctx: Context, next: () => Promise<any>) => {
            try {
                const key = config.id_key;
                const removeId = ctx.params[key];
                config.removeId = removeId;
                await service.remove(config);
                ctx.body = {
                    message: '删除成功'
                }
            } catch (error) {
                ctx.app.emit('error', error, ctx);
            }
        }
    }

    list(config: ListConfig){
        return async (ctx: Context, next: () => Promise<any>) => {
            try {
                const query: any = ctx.request.query;
                config.where = config.where.map(v => ({
                    ...v,
                    val: query[v.key] || v.val,
                    compare: v.compare.toUpperCase() || '='.toUpperCase()
                })).filter( v => v.val !== undefined);

                const result = await service.list(config);

                ctx.body = {
                    data: result,
                    message: '获取列表成功'
                }
            } catch (error) {
                ctx.app.emit('error', error, ctx);
            }
        }
    }

    update(config: UpdateConfig){
        return async (ctx: Context, next: () => Promise<any>) => {
            try {
                const updateId = ctx.params[config.id_key];
                const body = ctx.request.body;
                // 读取传递的值 | 默认值
                const data = config.data.map(v => ({
                    ...v,
                    val: body[v.key] || v.val,
                }))

                const updateData = data.filter(v => v.val !== undefined);

                if (!updateData.length) {
                    ctx.app.emit('error', new Error(MISSING_PARAMETER), ctx);
                    return false;
                }

                config.data = updateData;
                config.updateId = updateId;
                await service.update(config);

                ctx.body = {
                    message: '编辑成功'
                }
            } catch (error) {
                ctx.app.emit('error', error, ctx);
            }
        }
    }

    detail(config: DetailConfig){
        return async (ctx: Context, next: () => Promise<any>) => {
            try {
                const key = config.id_key;
                const detailId = ctx.params[key];

                config.detailId = detailId;
                
                const result = await service.detail(config);
                ctx.body = {
                    data: result,
                    message: '获取详细信息成功'
                }
            } catch (error) {
                ctx.app.emit('error', error, ctx);
            }
        }
    }
}

export default new CommonController();