import {observable, computed, action, runInAction} from 'mobx'
const REQUEST_URL="";
class InvestListStore {
    @observable listData={};
    //0:缺省，1:刷新中，2:成功，-1：失败
    @observable status=0;
    @observable msg='';
    @observable page=1;
    @observable isRefreshing=false;

    @action
    fetchInvestList=async () => {
        try {
            const result=await this._fetchDataFromUrl();
            runInAction(() => {
                this.status=2;
                this.isRefreshing=false;
                this.msg='';
                if (this.page == 1){
                    this.listData=result.slice(0);
                } else {
                    this.listData.concat(result)
                }
            });
        } catch (error) {
            this.status= -1;
            this.msg=error;
        }
    };

    _fetchDataFromUrl (url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (reqponse.status == 200) return response.json();
                    reject('非200错误');
                })
                .then(responseData=>{
                    if (responseData) {
                        resolve(responseData.feeds)
                    } else {
                        reject('数据错误！')
                    }
                })
                .catch(error =>{
                    reject('网络出错！')
                });
        });
    }
}
export default  InvestListStore;