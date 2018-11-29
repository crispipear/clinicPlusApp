import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const symptoms = [
    'Headache', 'Fatigue', 'Fever',
    'Nausea', 'Dizziness', 'Cough',
    'Runny nose', 'Vomiting', 'Cramp',
    'Skin rash', 'Diarrhea', 'Itch'
]

export default class ScheduleSymptoms extends Component {

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Symptoms</Text>
            <View style={styles.box}>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 15
    },
    box:{
        width:'100%',
        height: 200,
        backgroundColor: 'white',
        shadowColor: "#4d60a1",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10
    },
    title: {
        marginBottom: 7.5,
        fontSize: 18,
        fontWeight: '600',
        color: '#4d60a1',
        letterSpacing: 1
    }
})