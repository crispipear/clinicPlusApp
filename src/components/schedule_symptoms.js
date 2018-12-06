import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SiteConsumer} from '../SiteContext';

const symptoms = [
    'Headache', 'Fatigue', 'Fever',
    'Nausea', 'Dizziness', 'Cough', 'Vomiting', 'Cramps',
    'Skin rash', 'Diarrhea', 'Itch', 'Runny nose'
]

class ScheduleSymptoms extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Symptoms</Text>
            <View style={styles.box}>
                {
                    symptoms.map((s, key) => (
                        <SymptomButton
                            selectedSymptoms={this.props.selectedSymptoms}
                            update={this.props.updateAppointment}
                            key={key}
                            symptom={s}
                        />
                    ))
                }
            </View>
        </View>
      );
    }
}

class SymptomButton extends Component {
    _handlePress = () => {
        this.props.update('selectedSymptoms', this.props.symptom)
    }

    render(){
        return(
            <TouchableOpacity onPress={this._handlePress}
                style={styles.symptomButton}>
                <View style={styles.circle}>
                    <View style={[styles.circleSelected, 
                        this.props.selectedSymptoms.includes(this.props.symptom)
                            &&{opacity: 1}
                        ]}/>
                    <View style={styles.circleOutline}/>
                </View>
                <Text style={styles.symptomText}>{this.props.symptom}</Text>
            </TouchableOpacity>
        )
    }
}

export default () => (
    <SiteConsumer>
      {({appointment, updateAppointment}) => (
        <ScheduleSymptoms
            selectedSymptoms={appointment.selectedSymptoms}
            updateAppointment={updateAppointment}
        />
      )}
    </SiteConsumer>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 15
    },
    box:{
        width:'100%',
        backgroundColor: 'white',
        shadowColor: "#4d60a1",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        paddingHorizontal: 17.5,
        paddingVertical: 7.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    title: {
        marginBottom: 7.5,
        fontSize: 18,
        fontWeight: '600',
        color: '#4d60a1',
        letterSpacing: 1
    },
    symptomButton: {
        display: 'flex',
        width: '30%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        marginRight: 5
    },
    circleSelected: {
        width: 13,
        height: 13,
        borderRadius: 6.5,
        backgroundColor: '#ababdb',
        position: 'absolute',
        top: 2.5,
        left: 2.5,
        opacity: 0
    },
    circleOutline: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderColor: '#ababdb',
        borderWidth: 1
    },
    symptomText: {
        fontSize: 13
    }
})