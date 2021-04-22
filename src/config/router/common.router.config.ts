/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-22 22:49:44
 * @LastEditTime: 2021-04-22 23:00:00
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
    database: 'article',
    where: [],
    data: [],
}

const removeConfig: RemoveConfig  = {
    database: 'article',
    where: [],
    id_key: 'articleId',
}

const listConfig: ListConfig  = {
    database: 'article',
    where: [],
}

const updateConfig: UpdateConfig  = {
    database: 'article',
    where: [],
    data: [],
    id_key: 'articleId',
}

const detailConfig: DetailConfig  = {
    database: 'article',
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