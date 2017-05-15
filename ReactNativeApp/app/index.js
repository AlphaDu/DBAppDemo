import React,{PureComponent} from 'react'
import dva,{connect} from 'dva'
import {  AsyncStorage } from 'react-native'
const app = dva();
const App = app.start();
export default App;

