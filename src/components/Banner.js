import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Banner extends Component {
    render() {

      return (
        <View style={styles.container}>
            <View style={styles.block}/>
            <View style={styles.content}>
                <Text style={styles.topText}>upcoming appointment</Text>
                <Text style={styles.bottomText}>{this.props.content.date}</Text>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 90,
        marginBottom: 15,
        shadowColor: "#4e4c59",
        shadowOpacity: 0.15,
        shadowRadius: 7.5,
        shadowOffset: {
          height: 0,
          width: 0
        },
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row'
    },
    topText:{
        fontSize: 12,
        color: '#4e4c59',
        marginBottom: 7.5
    },
    bottomText:{
        fontSize: 18,
        color: '#4d60a1'
    },
    block:{
        backgroundColor: '#ababdb',
        width: 12,
        height: '100%'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 25
    }
})