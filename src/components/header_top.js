import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, } from 'react-native';
import {SiteConsumer} from '../SiteContext';
import MenuImage from '../assets/header_menu.png'
import IconImage from '../assets/header_icon.png'

class HeaderTop extends Component {
    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image resizeMode="contain" style={{width: 70}} source={IconImage}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image resizeMode="contain" style={{width: 20}} source={MenuImage}/>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
  })
 
export default ({navigation}) => (
  <SiteConsumer>
    {({updateScreenName}) => (
      <HeaderTop updateScreenName={updateScreenName} navigation={navigation}/>
    )}
  </SiteConsumer>
)