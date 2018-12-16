import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {SiteConsumer} from '../SiteContext'
import ScheduleDropdown from './schedule_dropdown'
import ScheduleTime from './schedule_time'
import ScheduleSymptoms from './schedule_symptoms'
import LinearGradient from 'react-native-linear-gradient';

const reasons = [{value: 'sick visit'}, {value: 'vaccination'}, {value: 'physical'}, {value: 'exams'}, {value: 'screening'}]
const headerColor = ['#4D60A1', '#8478BA']

class Schedule extends Component {
    updateValue = val => {
      this.props.updateAppointment('selectedType', val)
    }

    _handlePress = () => {
      const {navigate} = this.props.navigation
      this.props.makeAppointment()
      Alert.alert(
        'Success',
        'Your appointment has been created',
        [
          {text: 'OK', onPress: () => {navigate('Home')
          this.props.updateScreenName('Home')}}
        ],
        { cancelable: false }
      )
    }
    render() {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{paddingBottom: 25}} showsVerticalScrollIndicator={false}>
            <ScheduleDropdown name="Visit type" data={reasons} updateValue={this.updateValue}/>
            <ScheduleTime/>
            <ScheduleSymptoms/>
            <TouchableOpacity
              style={styles.button}
              onPress={this._handlePress}
            >
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                              colors={headerColor} style={styles.gradient}>
                <Text style={styles.text}>MAKE APPOINTMENT</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>

      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 25
    },
    button: {
      marginTop: 10
    },
    gradient: {
      padding: 17,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 16,
      letterSpacing: 2
    }
  })

export default ({navigation}) => (
  <SiteConsumer>
    {({updateScreenName, updateAppointment, makeAppointment}) => (
      <Schedule 
        updateScreenName={updateScreenName} 
        navigation={navigation} 
        makeAppointment={makeAppointment}
        updateAppointment={updateAppointment}
      />
    )}
  </SiteConsumer>
)