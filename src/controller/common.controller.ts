/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:30:39
 * @LastEditTime: 2021-04-22 00:05:31
 * @LastEditors: mTm
 */
import { Context } from 'koa'

import { ControllerCommon } from '../interface/class/common.interface.class'
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