/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-22 22:49:44
 * @LastEditTime: 2021-04-23 14:14:39
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
    where: [
        {
            key: 'content',
            compare: 'LIKE',
        },
        {
            key: 'user_id',
            compare: '=',
        }
    ],
    selectFiled: ['id', 'content', 'user_id'],
}

const updateConfig: UpdateConfig  = {
    tableName: 'article',
    data: [
        {
            key: 'content',
        }
    ],
    id_key: 'articleId',
}

const detailConfig: DetailConfig  = {
    tableName: 'article',
    id_key: 'articleId',
    selectFiled: ['id', 'content', 'user_id'],
}

export {
    createConfig,
    removeConfig,
    listConfig,
    updateConfig,
    detailConfig,
}