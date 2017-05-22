import React, {Component} from 'react'
import {StyleSheet, View, Button, Text, TextInput, Image,Switch} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import ScrollableTabBarView from 'react-native-scrollable-tab-view'
import TabBar from '../components/VectorIconTabbar'
import InvestView from '../page/InvestView'
import FinancingView from '../page/FinancingView'
import AccoutnView from '../page/AccountView'
import MoreView from '../page/MoreView'
const tabTiles = ['投资','融资','账户','更多'];

rendertabIcons = [
    ()=>(
        <FontAwesomeIcon name='cny' color="gray"/>
    ),
    ()=>(
        <SimpleLineIcons name="wallet" color="gray"/>
    ),
    ()=>(
        <SimpleLineIcons name="user" color="gray"/>
    ),
    ()=>(
        <SimpleLineIcons name="layers" color="gray"/>
    ),
];
selectedTabIcons = [
    ()=>(
        <FontAwesomeIcon name='cny' color="#FFA500"/>
    ),
    ()=>(
        <SimpleLineIcons name="wallet" color="#FFA500"/>
    ),
    ()=>(
        <SimpleLineIcons name="user" color="#FFA500"/>
    ),
    ()=>(
        <SimpleLineIcons name="layers" color="#FFA500"/>
    ),
];
export default class TabBarView extends Component{
    render(){
        return(
            <ScrollableTabBarView
                renderTabBar = {()=>(
                    <TabBar navigation={this.props.navigation}
                        tabTitles = {tabTiles}
                        renderIcons ={rendertabIcons}
                        renderSelectIcons = {selectedTabIcons}
                    />
                )}
                tabBarPosition='bottom'
                locked
                scrollWithoutAnimation
                onChangeTab ={(tab)=>{
                    console.log(tab)
                }}
            >
                <InvestView tabLabel=""/>
                <FinancingView tabLabel=""/>
                <AccoutnView tabLabel=""/>
                <MoreView tabLabel=""/>
            </ScrollableTabBarView>
        )
    }
}