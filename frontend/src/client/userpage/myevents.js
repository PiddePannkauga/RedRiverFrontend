import React, {Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import SearchBar from '../../components/searchbar';
import EventWorkInfoModal from './modal-eventworkinfo';
import MyCreatedEvents from './mycreatedEvents';
import Axios from 'axios';

class MyEvents extends Component{
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: '',
      userEvents: [],
      selectedEvent: {},
      isOpenMyEventModal: false,
    }

  }

  componentDidMount(){
    this.fetchEventInfoUser().then(res=>
      this.setState({userEvents: res})
    )
  }

  render(){
    return(
      <div>
        <h2 className="text-center">Mina Events</h2>
        <EventFinder events={this.state.userEvents} searchTerm={this.state.searchTerm} onClick={this.toggleMyEventInfoWorkModal}/>
        {this.props.isAdmin && <MyCreatedEvents/>}
        <EventWorkInfoModal event={this.state.selectedEvent} show={this.state.isOpenMyEventModal} onClose={this.toggleMyEventInfoWorkModal}/>
      </div>
    )
  }

  toggleMyEventInfoWorkModal = (selectedEvent) => {
    if(!this.state.isOpenMyEventModal){
      this.getSelectedEvent(selectedEvent);
      this.setState({

        isOpenMyEventModal: !this.state.isOpenMyEventModal
      })
    }else{
      this.setState({
        isOpenMyEventModal: !this.state.isOpenMyEventModal
      })
    }
  }

  getSelectedEvent(selectedEvent){
    this.state.userEvents.forEach((obj)=>{
      if(selectedEvent.eventId === obj.eventId)

      this.setState({selectedEvent: obj})
      return
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
}

export default MyEvents;
