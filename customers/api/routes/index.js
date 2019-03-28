var fscontroller=require('../controller/cn');


var express = require('express');

exports.routeApis = function(app){
 app.get('/signup', fscontroller.signup) ;
 app.get('/login', fscontroller.login) ;
 app.get('/signout', fscontroller.signout) ;
 app.get('/edit', fscontroller.edit) ;
 app.get('/deactivate', fscontroller.deactivate) ;
}