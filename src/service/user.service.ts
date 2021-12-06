/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-13 23:11:32
 * @LastEditTime: 2021-12-06 22:05:17
 * @LastEditors: mTm
 */
import connection from '../app/database';
import md5password from '../units/password-handle'

import { ServiceUser } from '../interface/class/user.interface.class';

class UserService implements ServiceUser {
    async list(name: string, offset: string, size: string) {
        const statement = `
            SELECT * FROM coderhub.user WHERE user like '%${name}%' LIMIT ?, ?;
        `;
        const [result] = await connection.execute(statement, [offset, size]);
        return result;
    }

    async create(user: string, password: string, email?:string) {
        if(email) {
            const statement = `INSERT INTO user (user, password, email) VALUES (?, ?, ?);`;
            const [result] = await connection.execute(statement, [user, md5password(md5password(password)), email]);
            return result;
        } else {
            const statement = `INSERT INTO user (user, password) VALUES (?, ?);`;
            const [result] = await connection.execute(statement, [user, md5password(md5password(password))]);
            return result;
        }
    }

    async getUserByName(name: string) {
        const statement = `SELECT * FROM user WHERE user = ?;`;
        const [result] = await connection.execute(statement, [name]);
    
        return result;
    }

    async getUserByEmail(email: string) {
        const statement = `SELECT * FROM user WHERE email = ?;`;
        const [result] = await connection.execute(statement, [email]);
    
        return result;
    }
}

export default new UserService();