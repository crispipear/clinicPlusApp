import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class ScheduleDropdown extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.name}</Text>
          <Dropdown 
            containerStyle={styles.dropdown}
            animationDuration={100} 
            data={this.props.data}
            baseColor="#4e4c59"
            onChangeText={value => this.props.updateValue(value)}
            />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text:{
        flex: 1,
        width: '25%',
        fontSize: 18,
        fontWeight: '600',
        color: '#4d60a1',
        letterSpacing: 1
    },
    dropdown: {
        width: '60%',
        marginTop: -15
    },
    title: {
        fontSize: 25
    }
})