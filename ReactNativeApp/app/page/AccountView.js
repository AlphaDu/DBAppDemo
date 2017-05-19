import React, {PureComponent} from 'react'
import {
    View,
    Text,
} from 'react-native'
import Invest from '../page/InvestView'
import Financing from '../page/FinancingView'
import Account from '../page/AccountView'
import More from '../page/MoreView'
const titles = ['投资','融资','账户','更多'];

export default class TabbarView extends PureComponent {
    render () {
        return (
            <View>
                <Text>Account</Text>
            </View>
        )
    }
}