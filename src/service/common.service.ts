/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:31:22
 * @LastEditTime: 2021-04-23 00:09:40
 * @LastEditors: mTm
 */
import connection from '../app/database'

import { ServiceCommon } from '../interface/class/common.interface.class'
import { 
    CreateConfig,
    RemoveConfig,
    ListConfig,
    UpdateConfig,
    DetailConfig,
} from '../interface/common.interface'

class CommonService implements ServiceCommon {
    async create(config: CreateConfig) {
        const { tableName, data } = config;
        const keys: string[] = [];
        const vals: any[] = [];
        const question: string[] = [];

        data.forEach(({key, val}) => {
            keys.push(key);
            vals.push(val);
            question.push('?');
        })

        const statement = `
            INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${question.join(',')});
        `

        const [result] = await connection.execute(statement, vals);

        return result;
    }

    async remove(config: RemoveConfig) {
        const { tableName, removeId } = config;

        const statement = `
            DELETE FROM ${tableName} WHERE id = ?;
        `;

        const [result] = await connection.execute(statement, [removeId]);

        return result;
    }

    async list(config: ListConfig) {
        
    }

    async update(config: UpdateConfig) {
        
    }

    async detail(config: DetailConfig) {
        
    }
}

export default new CommonService();