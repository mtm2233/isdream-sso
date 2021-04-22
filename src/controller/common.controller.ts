/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:30:39
 * @LastEditTime: 2021-04-22 23:52:16
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

                // 去除val为空的元素
                config.data = data.filter(v => v.val);
                
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
        
        }
    }

    list(config: ListConfig){
        return async (ctx: Context, next: () => Promise<any>) => {
        
        }
    }

    update(config: UpdateConfig){
        return async (ctx: Context, next: () => Promise<any>) => {
        
        }
    }

    detail(config: DetailConfig){
        return async (ctx: Context, next: () => Promise<any>) => {
        
        }
    }
}

export default new CommonController();