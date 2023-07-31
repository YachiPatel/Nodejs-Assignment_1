const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    database:"nodeJs",
    user:"root",
    password:""
});

conn.connect(function (err) {
    if(err){
        console.log(err);
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });

module.exports = conn;