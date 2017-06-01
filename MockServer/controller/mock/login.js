var loginService = require("../../service/LoginService");

exports.GET = function(req,res,next){
    setTimeout(function () {
        console.log('response');
        res.send('test');
    },500);
};
exports.POST = function(req,res,next){
    var reqj = JSON.parse(req.body.json);
    var username =reqj.username;
    var password =reqj.password;
    var resData =loginService.login(username,password);
    setTimeout(()=>{
        res.json(resData);
    },2000);

};