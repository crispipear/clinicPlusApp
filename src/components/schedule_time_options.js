import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SiteConsumer} from '../SiteContext'

class TimeOptions extends Component{
    render(){
        return(
            <View style={styles.container}>
                {this.props.appointment.times.map(time => (
                    this.props.appointment.selectedDate == time.date && 
                    time.times.map((t, key) => (
                        <TimeButton 
                            close={this.props.close}
                            key={key}
                            time={t}
                            date={this.props.appointment.selectedDate}
                            updateAppointment={this.props.updateAppointment}
                        />
                    ))
                ))}
            </View>
        )
    }
}

class TimeButton extends Component{
    _handlePress = () => {
        let date = `04/${this.props.date}/2018, ${this.props.time}`
        this.props.updateAppointment('selectedTime', date)
        this.props.close()
    }
    render(){
        return(
            <TouchableOpacity 
                onPress={this._handlePress}
                style={styles.button}
            >
                <Text style={{color: '#4e4c59', fontSize: 12.5}}>
                    {this.props.time}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default ({close}) => (
    <SiteConsumer>
      {({appointment, updateAppointment}) => (
        <TimeOptions close={close} 
                     appointment={appointment}
                     updateAppointment={updateAppointment}
        />
      )}
    </SiteConsumer>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 30
    },
    button: {
        display: 'flex',
        width: '48%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edf0f7',
        marginBottom: 10
    }
})