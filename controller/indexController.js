
//var expr;ess = require('../');
//var fs = require('fs');


module.exports = {
   
    page_index: function (req, res) {
        res.sendfile('/view/index.html', {root: __dirname});
    },
    
    page_login: function (req, res) {
        res.sendfile('/view/Login.html', {root: __dirname});
    },
    
    page_newUser: function (req, res) {
        res.sendfile('/view/form_newUser.html', {root: __dirname});
    },
    
    page_homeUser: function (req, res) {
    res.sendfile('/view/HomeUser.html', {root: __dirname});
    },
    
    page_notFound: function (req, res) {
    res.sendfile('/view/404.html', {root: __dirname});
    }
};
 