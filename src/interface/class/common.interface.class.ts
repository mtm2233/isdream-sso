/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:33:01
 * @LastEditTime: 2021-04-23 14:00:44
 * @LastEditors: mTm
 */
import { Context } from 'koa'
import { 
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig,
    UpdateSingleConfig,
} from '../common.interface'

interface ControllerCommon {
    create(config: CreateConfig): (ctx: Context, next: () => Promise<any>) => Promise<any>;
    remove(config: RemoveConfig): (ctx: Context, next: () => Promise<any>) => Promise<any>;
    list(config: ListConfig): (ctx: Context, next: () => Promise<any>) => Promise<any>;
    update(config: UpdateConfig): (ctx: Context, next: () => Promise<any>) => Promise<any>;
    detail(config: DetailConfig): (ctx: Context, next: () => Promise<any>) => Promise<any>;
}

interface ServiceCommon {
    create(config: CreateConfig): Promise<any>;
    remove(config: RemoveConfig): Promise<any>;
    list(config: ListConfig): Promise<any>;
    update(config: UpdateConfig): Promise<any>;
    updateSingle(config: UpdateSingleConfig): Promise<any>;
    detail(config: DetailConfig): Promise<any>;
}

export {
    ControllerCommon,
    ServiceCommon,
}