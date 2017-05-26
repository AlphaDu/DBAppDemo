var SimpleDb = require('./SimpleDb');
 function LoginService(){}
LoginService.prototype = new SimpleDb("../simpledb/user.json");
LoginService.prototype.constructor = LoginService;
LoginService.prototype.register = function (json) {

};
LoginService.prototype.login = function(username,password){
    var userList = this.read();
    var isLegal = false;
    userList.forEach(user =>{
        if(user.username === username && user.password === password ) {
            isLegal = true;
        }
    });
    if (isLegal){
        return this.success();
    }else{
        return this.fail("登录信息错误，请重新输入");
    }
};
LoginService.prototype.success = function (msg,widget){
    return {
        attr:1,
        msg:"登陆成功"
    }
};
LoginService.prototype.fail = function(msg,widget){
    return {
        attr:-1,
        msg:msg
    }
};
module.exports = new LoginService();