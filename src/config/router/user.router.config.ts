/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 20:20:47
 * @LastEditTime: 2021-05-01 20:24:01
 * @LastEditors: mTm
 */
import { 
    UpdateConfig,
} from '../../interface/common.interface'

const updateConfig: UpdateConfig  = {
    tableName: 'user',
    data: [
        {
            key: 'user',
        },
        {
            key: 'password',
        },
        {
            key: 'email',
        },
        {
            key: 'qq',
        },
        {
            key: 'wx',
        },
        {
            key: 'avatar',
        },
        {
            key: 'website',
        },
        {
            key: 'age',
        },
        {
            key: 'sex',
        },
        {
            key: 'birthday',
        }
    ],
    id_key: 'userId',
}


export {
    updateConfig,
}