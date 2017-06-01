import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
export default class TabbarView extends Component {
    _onClick = (title) => {
        Alert.alert(title + ' Clicked!')
    };
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
                <Text>More</Text>
                <VectorIconMenuCell
                    onPress = {this._onClick}
                    title="个人信息"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={() =>
                        <FontAwesomeIcon
                            name="user"
                            color="gray"
                            style={{fontSize:20}}
                        />}
                />
                <VectorIconMenuCell
                    onPress = {this._onClick}
                    title="安全中心"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="shield"
                            style={{fontSize:20}}
                        />}
                />
                <VectorIconMenuCell
                    onPress = {this._onClick}
                    title="常见问题"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="issue-reopened"
                            style={{fontSize:20}}
                        />}
                />
                <VectorIconMenuCell
                    onPress = {this._onClick}
                    title="更多服务"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="telescope"
                            style={{fontSize:20}}
                        />}/>
                <VectorIconMenuCell
                    onPress = {this._onClick}
                    title="应用设置"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="gear"
                            style={{fontSize:20}}
                        />}
                />

            </View>
        )
    }
}
const VectorIconMenuCell=({title, renderIconFunc, style, onPress}) => (
    <TouchableOpacity
        activeOpacity={0.75}
        style={styles.staticCell}
        onPress={() => onPress(title)}
    >
        <View style={{flex:1,justifyContent: 'center',
        alignItems: 'center'}}>
        {renderIconFunc()}
        </View>
        <View style={styles.cellStyle}>
            <Text style={{color: 'gray'}}>{title}</Text>
            <EntypoIcon color="gray" name="chevron-right"/>
        </View>
    </TouchableOpacity>
);

function __uri (str) {
    return str;
}
const styles=StyleSheet.create({
    settingContainer: {
        height: gScreen.isIOS ? 44 : 50,
        width: gScreen.isIOS ? 44 : 50,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellContainer: {
        borderColor: '#d9d9d9',
        marginTop: 15,
        backgroundColor: 'white'
    },
    staticCell: {
        flexDirection: 'row',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#FFFFFF",
        marginBottom:1
    },
    cellStyle: {
        flex: 8,
        height: 46,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }

});
