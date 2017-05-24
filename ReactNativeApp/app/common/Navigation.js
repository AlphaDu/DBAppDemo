import React from 'react';
import {StackNavigator} from 'react-navigation'
import TabBarView from '../containers/TabbarView'
import LoginView from '../page/Login'
import DirectInvestListView from '../containers/DirectInvestList'
const App = StackNavigator({
    TabbarView:{screen:TabBarView},
    LoginView:{screen:LoginView},
    DirectInvestList:{screen:DirectInvestListView},
});
export default App