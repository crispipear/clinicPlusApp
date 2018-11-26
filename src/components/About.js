import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class About extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go back home"
          onPress={() => navigate('Home')}
        />
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    title: {
        fontSize: 25
    }
  })

export default About