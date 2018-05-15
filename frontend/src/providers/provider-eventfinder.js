import React,{Component} from 'react';
import Axios from 'axios';

export const EventFinderContext = React.createContext();



export default class EventFinderProvider extends Component{

  state = {

    eventsPublic: [],
    eventsUser:  []
  }

  componentDidMount(){

    // const cachedEvents=localStorage.getItem('Events');
    // if(!cachedEvents){
      this.fetchEventInfoPublic().then(res => {this.setState({eventsPublic:res})})

    // }else{
    //   this.setState({events: JSON.parse(cachedEvents)})
    // }
  }

  fetchEventInfoPublic(){

    return Axios.get('http://ellakk.zapto.org:5050/api/Events').then(res => {
      localStorage.setItem('EventsPublic' , JSON.stringify(res.data));
      return res.data
    })
  }

  fetchEventInfoUser(){
    return Axios.get('http://ellakk.zapto.org:5050/api/User/events',{
      params: { userToken: sessionStorage.getItem('userToken') }

    }).then(res => {
      localStorage.setItem('EventsUser' , JSON.stringify(res.data));
      return res.data
    })
  }


  render(){
    return(
      <EventFinderContext.Provider value= {{
        state: this.state,
        fetchEvent: (res) => {this.fetchEventInfoPublic().then(res => {this.setState({events:res})})},
        fetchEventUser: (res)=>{this.fetchEventInfoUser().then(res => {this.setState({eventsUser:res})})},
      }}>
      {this.props.children}
    </EventFinderContext.Provider>

  )

}

}
