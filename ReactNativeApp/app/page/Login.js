import React, {Component} from 'react'
import {StyleSheet, View, Button, Text, TextInput, Image, Switch,ToastAndroid,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import loginStore from '../mobx/LoginStore'
import {observer} from 'mobx-react/native'
import {reaction,autorun} from 'mobx'
import Loading from '../components/Loading'
import {
    NavigationActions,
} from 'react-navigation'
@observer
export default class Login extends Component {
    static navigationOptions=({navigation}) => ({
        title: '登录',
    });
    constructor(){
        super();
        this.store = loginStore;
        reaction(
            ()=>this.store.isFetching,
            (fetch)=>{
                if(Platform.OS === 'android' && this.store.msg.trim() !== "" && fetch === false){
                    ToastAndroid.show(this.store.msg,ToastAndroid.SHORT)
                }else{

                }
            }
        );
        reaction(
            ()=>this.store.isLogin,
            (isLogin) =>{
                if(isLogin) this.props.navigation.goBack();
            }
        );
        super();
        this.state = {
            username:loginStore.username,
            isRemeber:loginStore.isRememberAccount
        }
    }
    onUsernameInput = (username)=>{
        this.setState({
            username
        });
        loginStore.username = username
    };
    onPasswordInput = (password)=>{
        this.setState({
            password
        })
    };


    render () {
        const {isRememberAccount} = loginStore;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: '#F0F0F0'
            }}>
                <View >
                    <Image style={{width: 200}} resizeMode='contain' source={require('../images/NBBankLogo.jpg')}/>
                </View>
                {/*登录信息输入框*/}
                <View style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#ffffff'
                }}>
                    <View style={styles.loginColumn}>
                        <View style={styles.iconArea}>
                            <Icon name="user" size={30}/>
                        </View>
                        <View style={styles.verticalLine}/>
                        <View style={styles.inputArea}>
                            <TextInput underlineColorAndroid="transparent"
                                       placeholder="证件号/手机号码/网银账号"
                                       placeholderTextColor='#D1D1D1'
                                       onChangeText={this.onUsernameInput}
                                       defaultValue={loginStore.isRememberAccount?this.state.username:''}
                            />
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
                                       secureTextEntry={true}
                                       placeholder="请输入登录密码"
                                       placeholderTextColor='#D1D1D1'
                                       onChangeText={this.onPasswordInput}
                                       defaultValue={this.state.password}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor: '#000000', height: 1, width: 230}}/>
                    <View style={styles.loginColumn}>
                        <Switch value={isRememberAccount}
                            onValueChange={()=>{
                                loginStore.switchRemember();
                            }}
                        />
                        <Text>记住用户名</Text>
                    </View>
                </View>
                <Loading isShow={loginStore.isFetching}/>
                <Button
                    style={{width: 200}} title="登陆"
                    onPress={() => {

                        loginStore.login({
                            username:this.state.username,
                            password:this.state.password
                        });
                    }}
                />
            </View>

        )

    }
    componentWillUnmount(){

    }
}


const styles=StyleSheet.create({
    loginComponent: {},
    loginColumn: {width: 280, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
    iconArea: {width: 50, alignItems: 'center', justifyContent: 'center'},
    inputArea: {width: 200, paddingLeft: 8},
    verticalLine: {height: 30, width: 1, backgroundColor: '#000000'},
    horizonLine: {backgroundColor: '#000000', height: 1, width: 230}
});
