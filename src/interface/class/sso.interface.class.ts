/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 20:52:01
 * @LastEditTime: 2021-05-01 20:57:34
 * @LastEditors: mTm
 */
interface ServiceSso {
    create(token: string): Promise<any>;
    isExists(token: string): Promise<boolean>;
}

export {
    ServiceSso
}