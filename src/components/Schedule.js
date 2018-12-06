import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SiteConsumer} from '../SiteContext'
import ScheduleDropdown from './schedule_dropdown'
import ScheduleTime from './schedule_time'
import ScheduleSymptoms from './schedule_symptoms'
import LinearGradient from 'react-native-linear-gradient';

const reasons = [{value: 'sick visit'}, {value: 'vaccination'}, {value: 'physical'}, {value: 'exams'}, {value: 'screening'}]
const headerColor = ['#4D60A1', '#8478BA']

class Schedule extends Component {
    updateValue = val => {
      console.log(val)
    }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <ScheduleDropdown name="Visit type" data={reasons} updateValue={this.updateValue}/>
          <ScheduleTime/>
          <ScheduleSymptoms/>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {navigate('Home'); this.props.updateScreenName('Home')}}
          >
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                            colors={headerColor} style={styles.gradient}>
              <Text style={styles.text}>MAKE APPOINTMENT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        minHeight: 485,
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 25
    },
    button: {
      marginBottom: 40
    },
    gradient: {
      padding: 17,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 15,
      letterSpacing: 2
    }
  })

export default ({navigation}) => (
  <SiteConsumer>
    {({updateScreenName}) => (
      <Schedule updateScreenName={updateScreenName} navigation={navigation}/>
    )}
  </SiteConsumer>
)