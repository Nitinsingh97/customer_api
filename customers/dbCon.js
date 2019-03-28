var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nitin",
    database: "dbase"
  });
  con.connect(function(err) {
    if (err) throw err;
    
    console.log(" U are Connected to database!");
    
})

module.exports=con;