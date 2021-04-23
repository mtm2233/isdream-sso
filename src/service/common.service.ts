/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-21 23:31:22
 * @LastEditTime: 2021-04-23 14:10:41
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
    UpdateSingleConfig,
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
        const { tableName, where } = config;

        const whereList: string[] = [];
        const vals: any[] = [];
        where.forEach(({key, val, compare}) => {
            switch (compare) {
                case 'LIKE': 
                    whereList.push(`${key} ${compare} '%${val}%'`);
                    break;
                case 'IS': 
                    whereList.push(`${key} ${compare} ${val}`);
                    break;
                default:
                    whereList.push(`${key} ${compare} ?`);
                    vals.push(val)
            }
        });

        const statement = `
            SELECT * FROM ${tableName} WHERE ${whereList.join('&&')}
        `;
        
        const [result] = await connection.execute(statement, vals);

        return result
    }

    async update(config: UpdateConfig) {
        const { tableName, data, updateId } = config;

        const promiseList = data.map(({key, val}) => this.updateSingle({
            key,
            val,
            tableName,
            updateId,
        }))

        const [result] = await Promise.all(promiseList)

        return result;
    }

    async updateSingle(config: UpdateSingleConfig) {
        const {
            key,
            val,
            tableName,
            updateId,
        } = config;

        const statement = `
            UPDATE ${tableName} SET ${key} = ? WHERE id = ?;
        `
        
        const [result] = await connection.execute(statement, [val, updateId]);

        return result;
    }

    async detail(config: DetailConfig) {
        const {
            tableName,
            detailId,
        } = config;

        const statement = `
            SELECT * FROM ${tableName} WHERE id = ?;
        `
        
        const [result] = await connection.execute(statement, [detailId]);

        return Array.isArray(result) ? result[0] : {};
    }
}

export default new CommonService();