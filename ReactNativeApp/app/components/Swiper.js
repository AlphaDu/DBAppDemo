import React, { PureComponent } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from '../common/ForkSwiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
    zIndex:9998
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
      zIndex:9999
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
      zIndex:9999
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
      zIndex:9999
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
      zIndex:9999
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',zIndex:99999
  },

  image: {
    width:'100%',
    flex: 1
  }
}

export default class extends PureComponent {
  render () {
    return (

        <Swiper style={styles.wrapper} height={180} horizontal={true} autoplay key={parseInt(Math.random()*100)} removeClippedSubviews={false}>
          <View style={styles.slide1}>
            <Image style={styles.image} resizeMode='stretch' source={require('../images/act1.jpg')}/>
          </View>
          <View style={styles.slide2}>
            <Image style={styles.image}  resizeMode='stretch' source={require('../images/act2.jpg')}/>
          </View>
          <View style={styles.slide3}>
            <Image style={styles.image}  resizeMode='stretch' source={require('../images/act3.jpg')}/>
          </View>
        </Swiper>

    )
  }
}
