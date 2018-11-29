import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const dates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


class Dates extends Component{
    render(){
        return(
            <View style={styles.dates}>
                {
                    this.props.dates.map((date, key) => (
                        <Text key={key} style={styles.date}>{date}</Text>
                    ))
                }
            </View>
        )
    }
}
class Dates extends Component{
    render(){
        return(
            <View style={styles.numDates}>
            </View>
        )
    }
}

export default class ScheduleCalendar extends Component {

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.calendar}>
                <Text style={styles.month}>April</Text>
                <Dates style={styles.dates} dates={dates}/>
            </View>
            <TouchableOpacity onPress={this.props.closeCalendar}>
                <Text>go back</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 15
    },
    calendar:{
        width:'100%',
        minHeight: 250,
        backgroundColor: 'white',
        shadowColor: "#4d60a1",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    month:{
        fontSize: 20,
        letterSpacing: 2,
        color: '#4e4c59',
        marginBottom: 10
    },
    dates:{
        height: 30,
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        color: '#4d60a1',
        fontWeight: '600',
        textAlign: 'center'
    }
})