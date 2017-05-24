var SimpleDb = require('./SimpleDb');
function loginService(){}
LoginService.prototype = new SimpleDb();
LoginService.prototype.constructor = LoginService;
LoginService.prototype.register = function (json) {
    
};
LoginService.prototype.Login = function(json){

};
LoginService.prototype.success = function (msg,widget){

};
LoginService.prototype.fail = function(msg,widget){

};