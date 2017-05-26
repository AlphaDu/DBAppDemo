import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import loginStore from '../mobx/LoginStore'
import {observer} from 'mobx-react/native'
@observer
export default class Account extends Component {
    render () {
        const {username} = loginStore;
        return (
            <View>
                <Text>您好！{username}</Text>
            </View>
        )
    }
}