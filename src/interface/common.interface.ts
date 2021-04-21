/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:32:51
 * @LastEditTime: 2021-04-21 23:58:48
 * @LastEditors: mTm
 */
interface KV {
    key: string,
    val: number | string
}

interface DataKV {
    key: string,
    val: number | string,
    require?: boolean,
}

interface CommonConfig {
    database: string,
    where: string[] | KV[],
}

interface CreateConfig extends CommonConfig {
    data: string[] | DataKV[],
}

interface RemoveConfig extends CommonConfig {

}

interface ListConfig extends CommonConfig {

}

interface UpdateConfig extends CommonConfig {
    data: string[] | DataKV[],
}

interface DetailConfig extends CommonConfig {

}


export {
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig,
}