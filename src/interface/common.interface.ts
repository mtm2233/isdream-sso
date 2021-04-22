/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:32:51
 * @LastEditTime: 2021-04-23 00:17:56
 * @LastEditors: mTm
 */
interface KV {
    key: string;
    val?: number | string | null;
    compare?: string;
}

interface DataKV {
    key: string;
    val?: number | string | null;
    require?: boolean;
}

interface CommonConfig {
    tableName: string;
    where?: KV[];
}
 
interface CreateConfig {
    tableName: string;
    data: DataKV[];
}

interface RemoveConfig extends CommonConfig {
    id_key: string;
    removeId?: number | string;
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