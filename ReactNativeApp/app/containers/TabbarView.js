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
import Swiper from '../components/Swiper'
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
export default class TabBarView extends
    Component{
    static navigationOptions = {
        header:null
    };
    _onChangeTab = ({i}) =>{
        this.props.navigation.setParams({
           params:{ title:this.getTitleLabel(i)}
        })
    };

    getTitleLabel(i){
        switch(i){

            case 0:return '投资';
            case 1:return '融资';
            case 2:return '账户';
            default :return '';
        }
    }
    render(){
        return(
            <ScrollableTabBarView
                renderTabBar = {()=>(
                    <TabBar
                        tabTitles = {tabTiles}
                        renderIcons ={rendertabIcons}
                        renderSelectIcons = {selectedTabIcons}
                        navigation={this.props.navigation}
                    />
                )}
                tabBarPosition='bottom'
                locked={true}
                scrollWithoutAnimation ={false}
                onChangeTab={this._onChangeTab}
                lazyLoad
            >
                <InvestView tabLabel="" navigation={this.props.navigation}/>
                <FinancingView tabLabel="" navigation={this.props.navigation}/>
                <AccoutnView tabLabel="" navigation={this.props.navigation}/>
                <MoreView tabLabel="" navigation={this.props.navigation}/>
            </ScrollableTabBarView>
        )
    }
}