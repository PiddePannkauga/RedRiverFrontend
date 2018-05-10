import React,{Component} from 'react';
import Axios from 'axios';

export const EventFinderContext = React.createContext();



export default class EventFinderProvider extends Component{

  state = {

    events: []

  }

  componentDidMount(){

    // const cachedEvents=localStorage.getItem('Events');
    // if(!cachedEvents){
      this.fetchEventInfo().then(res => {this.setState({events:res})})
    // }else{
    //   this.setState({events: JSON.parse(cachedEvents)})
    // }
  }

  fetchEventInfo(){

    return Axios.get('http://ellakk.zapto.org:5050/api/Events').then(res => {
      localStorage.setItem('Events' , JSON.stringify(res.data));
      return res.data
    })
  }


  render(){
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
