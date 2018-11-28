import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {SiteConsumer} from '../SiteContext';
import HomeButton from './home_button';
import Banner from './Banner';

const buttons = [
  {
    name: 'Schedule\nAppointment',
    icon: require('../assets/icon_appointment.png')
  },
  {
    name: 'Clinic\nLobby',
    icon: require('../assets/icon_lobby.png')
  },
  {
    name: 'Medical\nRecords',
    icon: require('../assets/icon_records.png')
  },
  {
    name: 'Check\nPrescriptions',
    icon: require('../assets/icon_prescription.png')
  }
]

class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Banner content={{type: 'appointment', date: 'Thursday, April 19th, 2018'}}/>
          </View>
          <View style={styles.bottom}>
            {
              buttons.map((button, key) => (
                <HomeButton key={key} icon={button.icon} name={button.name} navigation={this.props.navigation}/>
              ))
            }
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30
    },
    title: {
        fontSize: 25
    },
    top:{
      width: '100%',
      marginBottom: 10
    },
    bottom: {
      width: '100%',
      height: 300,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  })
 
export default ({navigation}) => (
  <SiteConsumer>
    {({updateScreenName}) => (
      <Home updateScreenName={updateScreenName} navigation={navigation}/>
    )}
  </SiteConsumer>
)