import React, {Component} from 'react'

const SiteContext = React.createContext({
    screenName: null,
    updateScreenName: () => null,
    user: null
  })
  
  export const SiteConsumer = SiteContext.Consumer
  
  export class SiteProvider extends Component {
    state = {
      screenName: 'Home',
      user: {
        name: 'Marcus Henderson',
        provider: 'UWN Belltown Clinic'
      }
    }

    updateScreenName = name => {
        this.setState({
            screenName: name
        })
    }
  
    render(){
      return(
        <SiteContext.Provider
          value={{
            screenName: this.state.screenName,
            updateScreenName: this.updateScreenName,
            user: this.state.user
          }}
        >
          {this.props.children}
        </SiteContext.Provider>
      )
    }
  }