import React,{Component} from 'react';
import Axios from 'axios';

export const EventDisplayContext = React.createContext();



export default class EventDisplayProvider extends Component{

  state = {

    events: [
      {name: 'Event 1',
      date: '2001/01/01',
      description: 'Här gör man saker'},
      {name: 'Event 2',
      date: '2010/05/06',
      description: 'Här gör man annat'},
      {name: 'Event 3',
      date: '2021/02/01',
      description: 'Här gör man mer'},
      {name: 'Event 4',
      date: '2018/12/12',
      description: 'Här gör man mindre'},
      {name: 'Event 5',
      date: '2018/12/12',
      description: 'Här gör man det man inte gör annavart'}
    ],

    selectedEvent: {}

  }

  fetchEventInfo(){

    return Axios.get('http://localhost:5000/api/user/events?token=2345asdf').then(res => {
      return res.data
    })
  }

  render(){
    let x;
    return(
      <EventDisplayContext.Provider value= {{
        state: this.state,
        fetchEvent: (res) => {this.fetchEventInfo().then(res => {this.setState({events:res})})},
        selectEvent: (res) => {console.log(res)}
      }}>
      {this.props.children}
    </EventDisplayContext.Provider>

  )

}

}
