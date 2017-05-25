import {observable, computed, action, runInAction} from 'mobx'
import HttpStore from './CommonHttpStore'
const REQUEST_URL="http://172.20.10.4:9003/mock/directinvest";
const PER_PAGE = 10 ;
class InvestListStore extends HttpStore{
    @observable listData=[];
    //0:缺省，1:刷新中，2:成功，-1：失败
    @observable isFetching=false;
    @observable msg='';
    @observable page=1;
    @observable isRefreshing=false;
    @observable hasNext = false;
    @action fetchInvestList=async () => {
        if (this.isRefreshing) this.page = 1;
        const URL = REQUEST_URL + "?page="+this.page+"&per=" + PER_PAGE;
        try {
            this.isFetching=true;
            const result=await this._fetchDataFromUrl(URL);
            runInAction(() => {
                this.isFetching=false;
                this.isRefreshing=false;
                this.msg='';
                if (this.page == 1){
                    this.listData = result.data.slice(0);
                } else {
                    this.listData.splice(this.listData.length,0,...result.data);
                }
                this.hasNext = result.hasNext;
            });
        } catch (err) {
            runInAction(()=>{
                this.msg=err.toString();
                this.isFetching=false;
            });


        }
    };
}
export default  InvestListStore;