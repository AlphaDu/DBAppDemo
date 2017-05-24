import React, {Component} from 'react'
import {StyleSheet, View, Image, Button, FlatList, Text} from 'react-native'
import InvestListStore from '../mobx/InvestListStore'
import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'
import {CircularProgress} from 'react-native-circular-progress';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const tmpdata=[
    {
        label: 'test投资项目',
        id: 12345532341,
        progress: '70%',
        remain: 5000,
        limit: 360,
        earning: '4.9%'
    }];

@observer
export default class InvestList extends Component {
    static navigationOptions = {
        title: '直投专区',
    };
    constructor () {
        super();
        this.store=new InvestListStore();
    }

    componentDidMount () {
        reaction(
            () => this.store.page,
            () => this.store.fetchInvestList());
    }
    _keyExtractor = (item, index) => item.id;
    _onRefresh=() => {
        this.store.isRefreshing=true;
        this.store.fetchInvestList();
    };
    _onEndReach=() => this.store.page++;
    _renderItem=(data) => (
        <InvestListCell {...data.item} />
    );

    render () {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={tmpdata}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onRefresh={this._onRefresh}
                    onEndReached={this._onEndReach}
                    refreshing={false}

                />
            </View>
        )
    }
}
const InvestListCell=({label, id, progress, remain, limit, earning}) => (
    <View style={{height:150,borderWidth:0.2,backgroundColor:"#ffffff",flexDirection:'column',margin:5}}>
        <View style={{flex:3,flexDirection:'row',alignItems: 'center', justifyContent: 'flex-start',paddingLeft:9}}>
            <Text style={{fontWeight: 'bold'}}>{label}</Text>
            <Text style={{fontSize:13,color:'#9D9D9D'}}>[{id}]</Text>
        </View>
        <View style={{flex:8,flexDirection:'row'}}>
            <View style={{flex:3, alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress
                    size={90}
                    width={5}
                    fill={progress.slice(0,-1)}
                    tintColor="#FF9224"
                    backgroundColor="#FFDCB9"
                />
                <View style={styles.progressInner}>
                    <Text>剩余</Text>
                    <Text style={{color:'#FF9224'}}>{remain}</Text>
                </View>
            </View>
            <View style={{flex:3,flexDirection:'column'}}>
                <View style={{flexDirection:'row',alignItems: 'center',
                justifyContent: 'center'}}>
                    <EvilIcons name="calendar" style={{fontSize:35}}/>
                    <Text>投资期限</Text>
                </View>
                <View style={{flex:7,alignItems: 'center',
                justifyContent: 'center'}}>
                    <Text style={{fontSize:35,color:'#FF9224'}}>{limit}</Text>
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flexDirection:'row',alignItems: 'center',
                justifyContent: 'center'}}>
                    <EvilIcons name="chart" style={{fontSize:35}}/>
                    <Text>投资期限</Text>
                </View>
                <View style={{flex:7,alignItems: 'center',
                justifyContent: 'center'}}>
                    <Text style={{fontSize:35,color:'#FF9224'}}>{earning}</Text>
                </View>
            </View>
        </View>
    </View>
);
const styles=StyleSheet.create({
    progressInner: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});