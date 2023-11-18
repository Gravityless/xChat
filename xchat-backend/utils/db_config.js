/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Xu Song
 * @Date: 2023-11-10 15:24:44
 * @LastEditors: Xu Song
 * @LastEditTime: 2023-11-10 22:12:55
 */
const mysql = require('mysql')

module.exports = {
  config: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'chatroom'
  },

  getDBConnection(sql, params, callback) {
    let connection = mysql.createConnection(this.config);
    connection.connect();
    connection.query(sql, params, callback);
    connection.end();
  }
}