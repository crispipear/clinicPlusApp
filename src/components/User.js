import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SiteConsumer} from '../SiteContext';

class User extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.left}>

            </View>
            <View style={styles.right}>
                <Text style={styles.text}>{this.props.user.name}</Text>
                <Text style={styles.text}>{this.props.user.provider}</Text>
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
        padding: 30,
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'right'
    },
    left: {
        flex: 1
    },
    right: {
        flex: 2,
        justifyContent: 'flex-end'
    }
  })
 
export default () => (
  <SiteConsumer>
    {({user}) => (
      <User user={user}/>
    )}
  </SiteConsumer>
)