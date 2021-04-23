/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:32:51
 * @LastEditTime: 2021-04-23 14:14:30
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
    where?: KV[];
    selectFiled?: string[];
}

interface UpdateConfig extends CommonConfig {
    data: DataKV[];
    id_key: string;
    updateId?: number | string;
}

interface UpdateSingleConfig extends CommonConfig {
    key: string;
    val: number | string | null;
    updateId: number | string;
}

interface DetailConfig extends CommonConfig {
    id_key: string;
    detailId?: number | string;
    selectFiled?: string[];
}


export {
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    UpdateSingleConfig,
    DetailConfig,
}