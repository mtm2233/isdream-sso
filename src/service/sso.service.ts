/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 20:46:12
 * @LastEditTime: 2021-05-01 20:53:14
 * @LastEditors: mTm
 */
import connection from '../app/database'

import { ServiceSso } from '../interface/class/sso.interface.class'

class SsoService implements ServiceSso {
    async create(token: string) {
        const statement = `
            INSERT INTO sso (token) VALUES (?);
        `
        const [result] = await connection.execute(statement, [token])

        return result
    }
}

export default new SsoService();