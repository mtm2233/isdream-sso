/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-22 22:49:44
 * @LastEditTime: 2021-04-22 23:58:57
 * @LastEditors: mTm
 */
import { 
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig
} from '../../interface/common.interface'

const createConfig: CreateConfig  = {
    tableName: 'article',
    data: [
        {
            key: 'content',
            require: true,
        },
        {
            key: 'user_id',
            require: true,
        },
    ],
}

const removeConfig: RemoveConfig  = {
    tableName: 'article',
    id_key: 'articleId',
}

const listConfig: ListConfig  = {
    tableName: 'article',
    where: [],
}

const updateConfig: UpdateConfig  = {
    tableName: 'article',
    where: [],
    data: [],
    id_key: 'articleId',
}

const detailConfig: DetailConfig  = {
    tableName: 'article',
    where: [],
    id_key: 'articleId',
}

export {
    createConfig,
    removeConfig,
    listConfig,
    updateConfig,
    detailConfig,
}