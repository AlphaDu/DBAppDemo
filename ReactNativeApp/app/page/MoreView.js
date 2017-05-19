import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
export default class TabbarView extends Component {
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
                <Text>More</Text>
                <VectorIconMenuCell
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
                    title="安全中心"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="shield"
                            style={{fontSize:20}}
                        />}
                />
                <VectorIconMenuCell
                    title="常见问题"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="issue-reopened"
                            style={{fontSize:20}}
                        />}
                />
                <VectorIconMenuCell
                    title="更多服务"
                    style={{borderBottomWidth: gScreen.onePix}}
                    renderIconFunc={()=>
                        <OcticonsIcon
                            name="telescope"
                            style={{fontSize:20}}
                        />}/>
                <VectorIconMenuCell
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
        {renderIconFunc()}
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
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellStyle: {
        flex: 1,
        height: 46,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }

});