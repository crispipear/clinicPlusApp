import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Home extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to about"
          onPress={() => navigate('About')}
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

export default Home