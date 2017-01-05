var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var controllers = require('express-controller');
var router = express.Router();

app.use(router);
app.use(express.static(__dirname));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));



controllers.setDirectory(__dirname + '/controllers').bind(router);



app.listen(80, function () {
    console.log('KappaPride');
});