var Mock = require('mockjs');
function mockVestList (req, res, next) {
    // /url?page=2&percount=10
    var TOTAL_COUNT=53;
    var PER_COUNT=10;
    var responseData={};
    function idgenerator (orderNum) {
        return parseInt(parseInt(Math.random() * 100000).toString()  + "000"+orderNum);
    }

    var page=parseInt(req.query.page);
    var per=parseInt(req.query.per);
    var remainNum=TOTAL_COUNT - (page - 1) * per;
    if (remainNum <= 0){

        res.send({
            attr: 1,
            msg: '没有数据',
            hasNext: false,
            data:{}
        })
    } else if (remainNum <= per){
        let data=[];
        for (var i=0; i < remainNum; i++) {
            data.push(Object.assign({id:idgenerator((page - 1) * per + i)},{
                label:Mock.Random.cword(5),
                progress:parseInt(Math.random()*100) + '%',
                remain:parseFloat(Math.random()*1000).toFixed(2),
                limit: 360,
                earning: parseFloat(Math.random()*100).toFixed(2) + '%'
            }));

        }
        res.send({
            attr: 1,
            msg: '操作成功',
            hasNext: false,
            data:data
        })
    } else {
        let data=[];
        for (var j = 0 ;j < per;j ++){

            data.push(Object.assign({id:idgenerator((page - 1) * per + j)},{
                label:Mock.Random.cword(5),
                progress:parseInt(Math.random()*100) + "%",
                remain:parseInt(Math.random()*1000 ),
                limit:parseInt(Math.random()*1000 ) ,
                earning: parseFloat(Math.random()*100).toFixed(2) + '%'
            }))
        }
        res.send({
            attr: 1,
            msg: '操作成功',
            hasNext: true,
            data:data
        })
    }
}
exports.POST=mockVestList;
exports.GET=mockVestList;