import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import {observer} from 'mobx-react/native'
import  loginStore from '../mobx/LoginStore';
@observer
export default class TabBar extends Component{
    static propType = {
        goToPage:React.PropTypes.func,
        activeTab:React.PropTypes.number,
        tabs:React.PropTypes.array,
        tabTitles:React.PropTypes.array,
        tabIcons :React.PropTypes.array,
        renderIcons:React.PropTypes.array,
        renderSelectIcons:React.PropTypes.array,
    };
    render(){
                                    return (
                                    <View style={styles.tabbar}>
                                    {
                                        this.props.tabs.map((tab,i)=>{
                                            let color = this.props.activeTab === i ?'FFA500':'gray';
                                            let iconRenderFunc = this.props.activeTab == i ?
                                                this.props.renderSelectIcons[i]:
                                                this.props.renderIcons[i];
                                            return (
                                                <TouchableOpacity
                                                    key={i}
                                                    activeOpacity={0.8}
                                                    style={styles.tabs}
                                onPress={()=>{

                                        this.props.goToPage(i)

                                }}
                            >
                                <View style={styles.tabitem}>
                                    {iconRenderFunc()}
                                    <Text  style={{color: color, fontSize: 12}}>
                                        {this.props.tabTitles[i]}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })

                }
            </View>
        )
    }
}
const styles  =StyleSheet.create({
   tabbar:{
       flexDirection: 'row',
       height: 49,
       borderTopColor: '#d9d9d9',
       justifyContent:'space-around'
   },
    tabs: {
        flexDirection: 'row',
        height: 49,
        borderTopColor: '#d9d9d9',
    },
    tabitem:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icon:{
        width: 26,
        height: 26,
        marginBottom: 2
    }
});