import './common/globalConstants'
import React,{PureComponent} from 'react'
import dva,{connect} from 'dva'
import {  AsyncStorage } from 'react-native'
import router from './router'
const app = dva();
app.router(()=><router/>);
const App = app.start();
export default App;

