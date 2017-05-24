var http = require('http');
var path= require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    autoRoutes = require('express-auto-routes'),
    CORS = require('./middleware/CORS');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(multipartMiddleware);
var config = require('./mock.config');
app.use(CORS);
for (var url in config){
    if(config.hasOwnProperty(url)){
        var response = {};
        if (typeof config[url]  == 'function'){
            response = config[url]();
        }else{
            response = config[url];
        }
        app.get(url,function(req,res,next){
            res.json(response);
        });
    }
}
var aRoutes = autoRoutes(app);
aRoutes(path.join(__dirname,'./controller'));
if (!module.parent) {
    var PORT = 9003;
    console.log('[INFO] Msg board RESTful API listening at localhost:%s', PORT);
    app.listen(PORT);
} else {
    module.exports = app;
}