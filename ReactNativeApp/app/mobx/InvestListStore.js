import {observable, computed, action, runInAction} from 'mobx'
import HttpStore from './CommonHttpStore'
const REQUEST_URL="http://172.20.10.4:900";
const PER_PAGE = 10 ;
class InvestListStore extends HttpStore{
    @observable listData=[];
    //0:缺省，1:刷新中，2:成功，-1：失败
    @observable isFetching=false;
    @observable msg='';
    @observable page=1;
    @observable isRefreshing=false;
    @action
    fetchInvestList=async () => {
        const URL = REQUEST_URL + "?page=" +"&page=" + PER_PAGE;
        try {
            this.isFetching=true;
            const result=await this._fetchDataFromUrl(URL);
            runInAction(() => {
                this.isRefreshing=false;
                this.msg='';
                if (this.page == 1){
                    this.listData=result.data.slice(0);
                } else {
                    this.listData.concat(result.data)
                }
                this.isFetching=false;
            });
        } catch (error) {
            this.isFetching=false;
            this.msg=error;
        }
    };
}
export default  InvestListStore;