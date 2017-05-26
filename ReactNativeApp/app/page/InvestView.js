import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Swiper from '../components/Swiper'
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
    constructor(){
        super();
        this.state = {
            showSwiper:false
        }
    }
    _renderSwiper(){
        if(this.state.showSwiper){
            return (
                <View style={{flex:1}}>
                    <Swiper/>
                </View>
            )
        }else{
            return (
                <View style={{flex:1}}/>
                )
        }
    }
    //android有BUG，Swiper需要延迟渲染
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                showSwiper:true
            })
        },0)
    }
    render () {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#f0f0f0'}}>
                {this._renderSwiper()}
                <View style={{width: '100%', flex:2,flexDirection:'column'}}>
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