/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-04-10 23:42:51
 * @LastEditTime: 2021-05-01 18:53:05
 * @LastEditors: mTm
 */
// 环境变量 .env
import * as fs from "fs";
import * as path from "path";

import * as dotenv from "dotenv";

// 公钥 用来解密token
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, "../../key/public.key"));
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, "../../key/private.key"));

dotenv.config();

const {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

export {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  PUBLIC_KEY,
  PRIVATE_KEY,
};
