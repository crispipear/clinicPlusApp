import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SiteConsumer} from '../SiteContext';

class User extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.picContainer}>
                    <Image 
                        style={{width: 110, height: 110}}
                        source={require('../assets/header_profilepic.jpg')}
                    />
                </View>
            </View>
            <View style={styles.right}>
                <Text style={[styles.text, {fontSize: 20, marginBottom: 5}]}>{this.props.user.name}</Text>
                <Text style={[styles.text, {fontSize: 13}]}>{this.props.user.provider}</Text>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    text: {
        color: 'white',
        textAlign: 'right'
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    picContainer:{
        width: 110,
        height: 110,
        borderRadius: 55,
        overflow: 'hidden'
    }
  })
 
export default () => (
  <SiteConsumer>
    {({user}) => (
      <User user={user}/>
    )}
  </SiteConsumer>
)