var mysql = require('mysql');
var dbc = require('../../dbCon');


//SIGNUP API
module.exports.signup = (request, response) => {
var sql = "INSERT INTO customers (name, email, password, status) VALUES ('Nitin', 'nitin.singh@vvdntech.in','vvk',0 )";
    dbc.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Successfully Signup!");
      response.end("Successfully Signup!");
    });
};



//LOGIN API
module.exports.login = (request, response) => { 
    
    var sql = "select name from customers where email='nitin.singh@vvdntech.in' and password='passnitin' ";
        dbc.query(sql, function (err, result) {
          if (err) throw err;
           
       
        var sql2 = "UPDATE customers set status=1 where password='vvk'  " ;
        dbc.query(sql2, function (err, result) {
          if (err) throw err;
          console.log("Successfully login!");
          response.end("Successfully login!");
        });
      });
  };

  //SIGNOUT API
  module.exports.signout = (request, response) => {
    var sql = "UPDATE customers set status=0 where password='vvk'  " ;
        dbc.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Successfully Signout!");
          response.end("Successfully Signout!");
        });
    };


  //EDIT PROFILE API
  module.exports.edit = (request, response) => {
    var sql = "UPDATE customers set name='vivek' ,email='vivek.s@gmail.com',  status='2' where password='vvk'  " ;
        dbc.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Successfully Updated!");
          response.end("Successfully Updated!");
        });
    };



    //DEACTIVATE ACCOUNT API
    module.exports.deactivate = (request, response) => {
      var sql = "UPDATE customers set name=NULL , email=NULL ,   status='3' where  password='vvk' " ;
          dbc.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Account Successfully Deactivate!");
            response.end("Account Successfully Deactivate!");
          });
      };
  