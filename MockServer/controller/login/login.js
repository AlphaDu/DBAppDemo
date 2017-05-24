exports.GET = function(req,res,next){
    setTimeout(function () {
        console.log('response');
        res.send('tests');
    },50000);
};
exports.POST = function(req,res,next){
    setTimeout(function () {
        console.log('response');
        res.send({
            attr:1,
            msg:'success'
        })
    },5000);
};