/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 20:52:01
 * @LastEditTime: 2021-05-01 22:08:31
 * @LastEditors: mTm
 */
interface ServiceSso {
    create(token: string, userId: number): Promise<any>;
    isExists(token: string): Promise<boolean | number>;
    remove(userId: number): Promise<any>;
}

export {
    ServiceSso
}