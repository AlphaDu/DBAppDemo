export default class CommonHttpStore{
    _fetchDataFromUrl (url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (reqponse.status == 200) return response.json();
                    reject('非200错误');
                })
                .then(responseData=>{
                    if (responseData) {
                        resolve(responseData);
                    } else {
                        reject('数据错误！');
                    }
                })
                .catch(error =>{
                    reject('网络出错！');
                });
        });
    }
    _postDataToUrl(URL,jsonData){
        let data = new FormData();
        data.append("json",JSON.stringify(jsonData));
        return new Promise((resolve,reject) =>{
            fetch(URL,{
                method:"POST",
                headers: {
                    'Accept': 'application/json'
                },
                body:data
            }).then(responseData=>{
                if (responseData) {
                    resolve(responseData);
                } else {
                    reject('数据错误！');
                }
            }).catch(error=>{
                reject('网络出错');
            })
        });
    }
}