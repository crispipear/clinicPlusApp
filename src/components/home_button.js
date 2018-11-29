import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {SiteConsumer} from '../SiteContext'

class HomeButton extends Component {
    _handlePress = () => {
        if(this.props.screen){
            const {navigate} = this.props.navigation
            navigate(this.props.screen)
            this.props.updateScreenName(this.props.name)
        }else{
            Alert.alert(
                'feature under development',
                'come back later',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }

    }
    render() {
      return (
        <TouchableOpacity onPress={this._handlePress} style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={this.props.icon}/>
            <Text style={styles.text}>{this.props.name}</Text>
        </TouchableOpacity>
      )
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

export default ({icon, name, screen, navigation}) => (
    <SiteConsumer>
      {({updateScreenName}) => (
        <HomeButton
            icon={icon}
            name={name}
            screen={screen}
            updateScreenName={updateScreenName} 
            navigation={navigation}
        />
      )}
    </SiteConsumer>
)