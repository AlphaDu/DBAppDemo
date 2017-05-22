import React from 'react';
import {StackNavigator} from 'react-navigation'
import TabBarView from '../containers/TabbarView'
import LoginView from '../page/Login'
const App = StackNavigator({
    TabbarView:{screen:TabBarView},
    LoginView:{screen:LoginView}
});
export default App