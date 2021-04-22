/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:32:51
 * @LastEditTime: 2021-04-22 10:37:09
 * @LastEditors: mTm
 */
interface KV {
    key: string;
    val: number | string
}

interface DataKV {
    key: string;
    val: number | string;
    require?: boolean;
}

interface CommonConfig {
    database: string;
    where: string[] | KV[];
}
 
interface CreateConfig extends CommonConfig {
    data: string[] | DataKV[];
}

interface RemoveConfig extends CommonConfig {
    id_key: string;
}

interface ListConfig extends CommonConfig {

}

interface UpdateConfig extends CommonConfig {
    data: string[] | DataKV[];
    id_key: string;
}

interface DetailConfig extends CommonConfig {
    id_key: string;
}


export {
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig,
}