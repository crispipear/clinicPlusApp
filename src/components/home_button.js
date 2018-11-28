import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default class HomeButton extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={this.props.icon}/>
            <Text style={styles.text}>{this.props.name}</Text>
        </TouchableOpacity>
      );
        // <Button
        //   title="Go to about"
        //   onPress={() => {navigate('About'); this.props.updateScreenName('About')}}
        // />
    }
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 13,
        shadowColor: "#4e4c59",
        shadowOpacity: 0.15,
        shadowRadius: 7.5,
        shadowOffset: {
          height: 0,
          width: 0
        },
        backgroundColor: 'white'
    },
    text: {
        marginTop: 10,
        fontSize: 12,
        letterSpacing: 1.5,
        textAlign: 'center'
    },
    image:{
        width: 75,
        height: 75
    }
})