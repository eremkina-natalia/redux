var mysql	= require('mysql');
var config = require('../config/config.js');

//todo figure out best way to be handling connections.
var createConnection = function(){
	var connection = mysql.createConnection(config.mysqlParams);
	return connection;
}


module.exports = createConnection;
