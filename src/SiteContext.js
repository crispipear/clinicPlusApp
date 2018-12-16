import React, {Component} from 'react'
import SocketIOClient from 'socket.io-client'

const socket = SocketIOClient('http://localhost:3000')

const SiteContext = React.createContext({
    screenName: null,
    updateScreenName: () => null,
    user: {},
    appointment: {},
    updateAppointment: () => null,
    makeAppointment: () => null
  })
  
  export const SiteConsumer = SiteContext.Consumer
  
  export class SiteProvider extends Component {
    
    state = {
      screenName: 'Home',
      user: {
        name: 'Marcus Henderson',
        id: 1105,
        provider: 'UWN Belltown Clinic'
      },
      appointment: {
        selectedType: null,
        selectedDate: 24,
        selectedTime: null,
        selectedSymptoms: [],
        times: [
          {
              date: 24,
              times: ['09:00 AM - 09:45 AM', '10:00 AM - 10:45 AM', '02:00 PM - 02:45 PM']        
          },
          {
              date: 27,
              times: ['11:00 AM - 11:45 AM', '01:00 PM - 01:45 PM', '02:00 PM - 02:45 PM', '03:00 PM - 03:45 PM']        
          },
          {
              date: 30,
              times: ['01:00 PM - 01:45 PM', '02:00 PM - 02:45 PM', '03:00 PM - 03:45 PM']        
          }
        ]
      }
    }

    updateScreenName = name => {
        this.setState({
            screenName: name
        })
    }

    updateAppointment = (type, val) => {
      let updated = this.state.appointment
      if(type == 'selectedSymptoms'){
        let symptoms = updated.selectedSymptoms.slice()
        if (symptoms.includes(val)){
          let index = symptoms.indexOf(val)
          symptoms.splice(index, 1)
        }else{
          symptoms.splice(0, 0, val)          
        }
        updated[type] = symptoms
      }else{
        updated[type] = val
      }
      this.setState({
        appointment: updated
      })
    }

    makeAppointment = () => {
      let a = this.state.appointment
      socket.emit('create_appointment', {
        type: 'appointments',
        action: 'create',
        id: 10135,
        dataComponent: {
          user: this.state.user.id,
          type: a.selectedType,
          date: `04/${a.selectedDate}/2018`,
          time: a.selectedTime,
          symptoms: a.selectedSymptoms
        }
      })
    }

    render(){
      return(
        <SiteContext.Provider
          value={{
            screenName: this.state.screenName,
            updateScreenName: this.updateScreenName,
            user: this.state.user,
            appointment: this.state.appointment,
            updateAppointment: this.updateAppointment,
            makeAppointment: this.makeAppointment
          }}
        >
          {this.props.children}
        </SiteContext.Provider>
      )
    }
  }