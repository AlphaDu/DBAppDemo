import React,{Component} from 'react'
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation'
import TestView from '../page/TestView'
const HomeNavigator = TabNavigator({
    Home:{screen:TestView},
},{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
});

const AppNavigator = StackNavigator({
    Main:{},
    Login:{}
},{
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
        gesturesEnabled: false,
    },
});
