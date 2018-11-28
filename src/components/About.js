import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SiteConsumer} from '../SiteContext'

class About extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go back home"
          onPress={() => {navigate('Home'); this.props.updateScreenName('Home')}}
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

export default ({navigation}) => (
  <SiteConsumer>
    {({updateScreenName}) => (
      <About updateScreenName={updateScreenName} navigation={navigation}/>
    )}
  </SiteConsumer>
)