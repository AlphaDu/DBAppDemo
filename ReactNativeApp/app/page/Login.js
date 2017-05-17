import React, {Component} from 'react'
import {StyleSheet, View, Button, Text, TextInput, Image,Switch} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
export default class Login extends Component {
    render () {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',backgroundColor:'#F0F0F0'}}>
                <View >
                    <Image style={{width:200}} resizeMode='contain' source={require('../images/NBBankLogo.jpg')}/>
                </View>
                {/*登录信息输入框*/}
                <View style={{borderWidth: 1, borderRadius: 10, flexDirection: 'column', alignItems: 'center',backgroundColor:'#ffffff'}}>
                    <View style={styles.loginColumn}>
                        <View style={styles.iconArea}>
                            <Icon name="user" size={30}/>
                        </View>
                        <View style={styles.verticalLine}/>
                        <View style={styles.inputArea}>
                            <TextInput underlineColorAndroid="transparent"
                                       placeholder="证件号/手机号码/网银账号"
                                       placeholderTextColor='#D1D1D1'/>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#000000', height: 1, width: 230}}/>
                    <View style={styles.loginColumn}>
                        <View style={styles.iconArea}>
                            <Icon name="lock" size={30}/>
                        </View>
                        <View style={styles.verticalLine}/>
                        <View style={styles.inputArea}>
                            <TextInput underlineColorAndroid="transparent"
                                       placeholder="请输入登录密码"
                                       placeholderTextColor='#D1D1D1'/>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#000000', height: 1, width: 230}}/>
                    <View style={styles.loginColumn}>
                        <Switch/>
                        <Text>记住用户名</Text>
                    </View>
                </View>
                <Button style={{width:200}} title="登陆" onPress={()=>{}}/>
            </View>

        )

    }
}


const styles=StyleSheet.create({
    loginComponent: {},
    loginColumn: {width: 280, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
    iconArea: {width:50,alignItems: 'center', justifyContent: 'center'},
    inputArea: {width: 200,paddingLeft:8},
    verticalLine:{height:30,width:1,backgroundColor:'#000000'},
    horizonLine:{backgroundColor: '#000000', height: 1, width: 230}
});
