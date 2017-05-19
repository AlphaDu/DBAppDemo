import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import {Grid, Row, Col} from 'react-native-elements'
const styles=StyleSheet.create({
    wrapper: {
        width:100,height:100
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
        width:100,
        height:100,
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        width:100,
        height:100,
        zIndex: 999
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center',
        width:100,
        height:100,
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
            <View style={{flex:1,flexDirection:'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <View>
                    <Text>test</Text>
            </View>
                <View style={{height:200}}>
                    <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                        <View >
                            <Text>And simple</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={{height:300}}>
                    <Grid containerStyle={{width:100,height:100,borderWidth:1}}>
                        <Row>
                            <Col>
                                <Text>1</Text>
                            </Col>
                            <Col><Text>1</Text></Col>
                        </Row>
                        <Row>
                            <Col><Text>1</Text></Col>
                            <Col><Text>1</Text></Col>
                            <Col><Text>1</Text></Col>
                        </Row>
                        <Row>
                            <Col><Text>1</Text></Col>
                            <Col><Text>1</Text></Col>
                            <Col><Text>1</Text></Col>
                        </Row>
                    </Grid>
                </View>
            </View>
        )
    }
}
class InvestView extends PureComponent {
    render () {

    }
}