import React, {Component} from 'react';
import {StyleSheet, View, Button, ScrollView} from 'react-native';
import {SiteConsumer} from '../SiteContext'
import ScheduleDropdown from './schedule_dropdown'
import ScheduleTime from './schedule_time'
import ScheduleSymptoms from './schedule_symptoms'

const reasons = [{value: 'sick visit'}, {value: 'vaccination'}, {value: 'physical'}, {value: 'exams'}, {value: 'screening'}]

class Schedule extends Component {
    updateValue = val => {
      console.log(val)
    }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <ScrollView style={styles.container}>
          <ScheduleDropdown name="Visit type" data={reasons} updateValue={this.updateValue}/>
          <ScheduleTime/>
          <ScheduleSymptoms/>
          <Button
            title="Go back home"
            onPress={() => {navigate('Home'); this.props.updateScreenName('Home')}}
          />
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 150
    },
    title: {
        fontSize: 25
    }
  })

export default ({navigation}) => (
  <SiteConsumer>
    {({updateScreenName}) => (
      <Schedule updateScreenName={updateScreenName} navigation={navigation}/>
    )}
  </SiteConsumer>
)