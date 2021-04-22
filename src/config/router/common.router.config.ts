/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-22 22:49:44
 * @LastEditTime: 2021-04-22 23:12:41
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
    data: [],
}

const removeConfig: RemoveConfig  = {
    tableName: 'article',
    where: [],
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