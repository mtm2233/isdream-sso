/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 20:20:47
 * @LastEditTime: 2021-05-01 21:32:14
 * @LastEditors: mTm
 */
import { 
    CreateConfig,
} from '../../interface/common.interface'

const CreateConfig: CreateConfig  = {
    tableName: 'sso_project',
    data: [
        {
            key: 'sso_id',
            require: true
        },
        {
            key: 'project_id',
            require: true
        },
    ],
}


export {
    CreateConfig,
}