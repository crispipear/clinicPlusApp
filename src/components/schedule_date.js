import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SiteConsumer} from '../SiteContext'

class NumDates extends Component{
    _handlePress = () => {
        if(this.props.clickable){
            this.props.updateAppointment('selectedDate', this.props.date)
        }
    }
    render(){
        return(
            <TouchableOpacity onPress={this._handlePress}
                disabled={!this.props.clickable} 
                style={[styles.numDate, 
                        this.props.appointment.selectedDate == this.props.date && {backgroundColor: '#ABABDB'}
                      ]}>
                <Text style={[
                    this.props.clickable?{opacity:1, fontWeight: '600'}:{opacity:0.65},
                    this.props.appointment.selectedDate == this.props.date && {color: '#FFFFFF'}
                ]}>
                    {this.props.date}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default ({date, clickable}) => (
    <SiteConsumer>
      {({appointment, updateAppointment}) => (
        <NumDates appointment={appointment} 
                  updateAppointment={updateAppointment}
                  clickable={clickable} 
                  date={date}
        />
      )}
    </SiteConsumer>
)

const styles = StyleSheet.create({
    numDate: {
        width: '14.2%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 39,
        height: 39,
        borderRadius: 19.5
    },
    numDateText:{
        textAlign: 'center',
        color: '#4e4c59'
    }
})