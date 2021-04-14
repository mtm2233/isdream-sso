/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-28 13:02:11
 * @LastEditTime: 2021-04-14 23:13:29
 * @LastEditors: mTm
 */
const errorType = require('../constants/error-types')

const failCodeMap = new Map([
    [errorType.SERVICE_ERROR, {
        message: 'service error',
        status: 500,
    }],
    [errorType.UN_AUTH_ORIZATION, {
        message: '无效token~',
        status: 401,
    }],
    [errorType.UN_AUTH_PERMISSION, {
        message: '权限不足',
        status: 401,
    }],
    [errorType.CONTENT_DOES_NOT_EXISTS, {
        message: '内容不存在',
        status: 410,
    }],
]);

const errorHandler = (error,ctx) => {
    const message = error.message;
    const failCode = failCodeMap.get(message) || {
        message,
        status: 500,
    }
    ctx.body = failCode;
    ctx.status = failCode.status;
}

module.exports = errorHandler