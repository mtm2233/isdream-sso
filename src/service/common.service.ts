/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:31:22
 * @LastEditTime: 2021-04-21 23:37:49
 * @LastEditors: mTm
 */
import connection from '../app/database'

import { ServiceCommon } from '../interface/class/common.interface.class'
import { 
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig,
} from '../interface/common.interface'

class CommonService implements ServiceCommon {
    async create(config: CreateConfig) {
        
    }

    async remove(config: RemoveConfig) {
        
    }

    async list(config: ListConfig) {
        
    }

    async update(config: UpdateConfig) {
        
    }

    async detail(config: DetailConfig) {
        
    }
}

export default new CommonService();