import React, {Component} from 'react'

const SiteContext = React.createContext({
    screenName: null,
    updateScreenName: () => null,
    user: {},
    appointment: {},
    updateAppointment: () => null
  })
  
  export const SiteConsumer = SiteContext.Consumer
  
  export class SiteProvider extends Component {
    state = {
      screenName: 'Home',
      user: {
        name: 'Marcus Henderson',
        provider: 'UWN Belltown Clinic'
      },
      appointment: {
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
      console.log(updated[type])
      this.setState({
        appointment: updated
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
            updateAppointment: this.updateAppointment
          }}
        >
          {this.props.children}
        </SiteContext.Provider>
      )
    }
  }