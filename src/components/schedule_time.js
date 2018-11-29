import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ScheduleCalendar from './schedule_calendar'
export default class ScheduleTime extends Component {
    state={
        calendar: true,
        time: null
    }
    _openCalendar = () => {
        this.setState({
            calendar: true
        })
    }
    closeCalendar = () => {
        this.setState({
            calendar: false
        })
    }

    render() {
      return (
        <View style={styles.container}>
            {
                this.state.calendar
                ?<ScheduleCalendar closeCalendar={this.closeCalendar}/>
                :<TouchableOpacity style={styles.textContainer} onPress={this._openCalendar}>
                    {
                        this.state.time
                        ?<Text style={styles.text}>{this.state.time}</Text>
                        :<Text style={styles.text}>select appointment time</Text>
                    }
                </TouchableOpacity>
            }
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
        fontSize: 16,
        fontWeight: '600',
        color: '#4d60a1',
        textAlign: 'center',
        letterSpacing: 1
    },
    textContainer:{
        flex: 1,
        backgroundColor:'#edf0f7',
        padding: 10,
        marginVertical: 15,
    }
})