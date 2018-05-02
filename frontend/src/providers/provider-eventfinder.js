import React,{Component} from 'react';
import Axios from 'axios';

export const EventFinderContext = React.createContext();



export default class EventFinderProvider extends Component{

  state = {

    events: [],

    selectedEvent: {}

  }

  fetchEventInfo(){

    return Axios.get('http://ellakk.zapto.org:5050/api/Events').then(res => {

      return res.data
    })
  }


  render(){
    let x;
    return(
      <EventFinderContext.Provider value= {{
        state: this.state,
        fetchEvent: (res) => {this.fetchEventInfo().then(res => {this.setState({events:res})})},
      }}>
      {this.props.children}
    </EventFinderContext.Provider>

  )

}

}
