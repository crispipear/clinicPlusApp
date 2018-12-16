import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NumDate from './schedule_date';
import TimeOptions from './schedule_time_options'
const dates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


class Dates extends Component{
    _createDates(){
        let result = []
        for (let i = 1; i < 31; i++){
            let avai = false
            if(i == 24 || i == 27 || i == 30){
                avai = true
            }
            result.push(<NumDate key={i} date={i} clickable={avai}/>)
        }
        return result
    }
    render(){
        return(
            <View>
                <View style={styles.datesHeader}>
                    {
                        this.props.dates.map((date, key) => (
                            <View key={key} style={{width: '14.2%'}}>
                                <Text style={styles.date}>{date}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.datesContainer}>
                    {this._createDates()}
                </View>
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
            <TimeOptions close={this.props.closeCalendar}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 450,
        marginVertical: 15
    },
    calendar:{
        width:'100%',
        minHeight: 310,
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
        fontSize: 22,
        letterSpacing: 2,
        color: '#4e4c59',
        marginBottom: 10
    },
    datesHeader:{
        height: 30,
        marginTop: 10,
        letterSpacing: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        color: '#4d60a1',
        fontWeight: '600',
        textAlign: 'center'
    },
    datesContainer:{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
