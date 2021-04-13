/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-04-13 23:11:32
 * @LastEditTime: 2021-04-13 23:36:48
 * @LastEditors: mTm
 */
const connection = require('../app/database.js')

class UserService {
    async list(name, offset, size) {
        const statement = `
            SELECT * FROM user WHERE username like '%${name}%' LIMIT ?, ?;
        `;
        const [result] = await connection.execute(statement, [offset + '', size + '']);
        return result;
    }
}

module.exports = new UserService()