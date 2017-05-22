import {observable, computed, action, runInAction} from 'mobx'
import { create, persist } from 'mobx-persist'
import {AsyncStorage} from 'react-native'
class LoginStore {
    @observable isLogin = false;
    @persist @observable isRememberAccount = false;
    @persist @observable id = '';
    @observable isFetching = false ;
    @observable token = '';
    @action mockLogin = ({username = '',password = ''})=>{
        if (username === 'yfdu' && password === '123456') {
            this.id = 'yfdu';
            this.isLogin = true;
        }
    };
    @action switchRemember = () =>{
        this.isRememberAccount = !this.isRememberAccount;
    }
}
const hydrate = create({
    storage:AsyncStorage,
    jsonify:true
});
const loginStoreInstance = new LoginStore();
export default loginStoreInstance;
hydrate('login',loginStoreInstance).then(()=>console.log('loginStore hydrated'));
