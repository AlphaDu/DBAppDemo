import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {Grid, Row, Col} from 'react-native-elements'
import EIcon from 'react-native-vector-icons/Entypo'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import InvestList from '../containers/DirectInvestList'
const styles=StyleSheet.create({
    wrapper: {
        width: 100, height: 100
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        width: 100,
        height: 100,
        zIndex: 999
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#000fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

});
export default class TabbarView extends PureComponent {
    render () {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <View>
                    <Text>test</Text>
                </View>
                <View style={{height: '30%'}}>

                </View>
                <View style={{width: '100%', height: '60%',flexDirection:'column',borderWidth:1}}>
                    <View style={{flex:2,flexDirection:'row'}}>

                        <View  style={{flex:2,backgroundColor:'#FF6A6A',margin:5}}>
                            <TouchableOpacity style={{flex:1,alignItems: 'center', justifyContent: 'center',flexDirection:'column'}}
                                              onPress={()=>{
                                                this.props.navigation.navigate('DirectInvestList');
                                              }}
                            >
                            <EIcon name="shopping-cart" style={{fontSize:70,color:'#ffffff'}}/>
                            <Text style={{fontWeight: 'bold',color:'#ffffff',fontSize:20}}>直投专区</Text>
                                <Text style={{fontWeight: 'bold',color:'#ffffff',fontSize:13}}>最高8.8%</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#FF6A6A',margin:5}}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
class InvestView extends PureComponent {
    render () {

    }
}