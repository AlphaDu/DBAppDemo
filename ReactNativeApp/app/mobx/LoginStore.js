import {observable, computed, action, runInAction} from 'mobx'
import { create, persist } from 'mobx-persist'
import {AsyncStorage} from 'react-native'
import HttpStore from './CommonHttpStore'
const URL = 'http://172.20.10.4:9003/mock/login';
class LoginStore extends HttpStore{
    @observable isLogin = false;
    @persist @observable isRememberAccount = false;
    @persist @observable id = '';

    @observable username = '';
    @observable isFetching = false ;
    @observable token = '';
    @observable msg = '';
    @action mockLogin = ({username = '',password = ''})=>{
        if (username === 'yfdu' && password === '123456') {
            this.id = 'yfdu';
            this.isLogin = true;
        }
    };
    @action switchRemember = () =>{
        this.isRememberAccount = !this.isRememberAccount;
    };
    @action login =async ({username,password})=>{
        try{
            this.isFetching  = true;
            const data = await this._postDataToUrl(URL,{username,password});
            runInAction(()=>{
                if(data){
                    this.isLogin = true;
                    this.username  =  data.username;
                }else{
                    this.msg = data.msg;
                }
                this.isFetching = false;
            });
        }catch (err){
            runInAction(()=>{
                this.msg = err;
                this.isFetching = false;
            });

        }
    };
}
const hydrate = create({
    storage:AsyncStorage,
    jsonify:true
});
const loginStoreInstance = new LoginStore();
export default loginStoreInstance;
hydrate('login',loginStoreInstance).then(()=>console.log('loginStore hydrated'));
