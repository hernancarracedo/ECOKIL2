/*
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost', 
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'ecokil'
});
module.exports = connection;
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

*/
// config/database.js

module.exports = {
  'connection': {
      'host': 'localhost',
      'user': 'root',
      'password': ''
  },
'database': 'ecokil',
  'users_table': 'users'
};
