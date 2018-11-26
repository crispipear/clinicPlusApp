import React, {Component} from 'react'

const SiteContext = React.createContext({
    screenName: 'Home',
    updateScreenName: () => null
  })
  
  export const SiteConsumer = SiteContext.Consumer
  
  export class SiteProvider extends Component {
    state = {
      screenName: 'Home'
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
            updateScreenName: this.updateScreenName
          }}
        >
          {this.props.children}
        </SiteContext.Provider>
      )
    }
  }