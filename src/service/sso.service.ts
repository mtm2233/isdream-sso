/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 20:46:12
 * @LastEditTime: 2021-05-01 22:04:27
 * @LastEditors: mTm
 */
import connection from '../app/database'

import { ServiceSso } from '../interface/class/sso.interface.class'

class SsoService implements ServiceSso {
    async create(token: string, userId: number) {
        await this.remove(userId);
        const statement = `
            INSERT INTO sso (token, user_id) VALUES (?, ?);
        `
        const [result] = await connection.execute(statement, [token, userId])

        return result
    }

    async isExists(token: string) {
        const statement = `
            SELECT * FROM sso WHERE token = ?;
        `
        const [result] = await connection.execute(statement, [token])

        if (Array.isArray(result) && result.length) {
            return (result[0] as any).id
        } else {
            return false
        }
    }

    async remove(userId: number) {
        const statement = `
            DELETE FROM sso WHERE user_id = ?;
        `
        const [result] = await connection.execute(statement, [userId])

        return result;
    }
}

export default new SsoService();