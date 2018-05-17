import React,{Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import Axios from 'axios';
import EditEventModal from './modal-editevent';
import CreateEventModal from './modal-createEvent';

class MyCreatedEvents extends Component{

  constructor(props){
    super(props)
    this.state={
      adminCreatedEvents: [],
      selectedEvent: {},
      isOpenEditEventModal: false,
      isOpenCreateEvent: false,
      eventEdited: false
    }
  }

  componentDidMount(){
    this.fetchAdminCreatedEvents().then(res=>{this.setState({adminCreatedEvents:res})})
  }

  componentDidUpdate(){
    if(this.state.eventEdited){
      this.fetchAdminCreatedEvents().then(res=>{this.setState({adminCreatedEvents:res})})
    }
  }

  render(){
    return(
      <div>
        <button className="btn btn-primary" onClick={this.toggleCreateEvent}>Skapa Event</button>
        <h2>Mina Skapade Event</h2>
        <EventFinder events={this.state.adminCreatedEvents} onClick={this.toggleEditEventModal}/>
        <EditEventModal event={this.state.selectedEvent} show={this.state.isOpenEditEventModal} onClose={this.toggleEditEventModal} />
        <CreateEventModal show={this.state.isOpenCreateEvent} onClose={this.toggleCreateEvent}/>
      </div>

    )
  }

  toggleCreateEvent = () =>{
    if(!this.state.isOpenCreateEvent){
      this.setState({
        isOpenCreateEvent: !this.state.isOpenCreateEvent
      })
    }else{
      this.setState({
        isOpenCreateEvent: !this.state.isOpenCreateEvent
      })
    }

  }

  toggleEditEventModal = (selectedEvent) => {
    if(!this.state.isOpenEditEventModal){
      this.getSelectedEvent(selectedEvent);
      this.setState({
        isOpenEditEventModal: !this.state.isOpenEditEventModal
      })
    }else{
      this.setState({
        selectedEvent: {},

        isOpenEditEventModal: !this.state.isOpenEditEventModal
      })
    }
  }

  getSelectedEvent(selectedEvent){
    this.state.adminCreatedEvents.forEach((obj)=>{
      if(selectedEvent.eventId === obj.eventId)

      this.setState({selectedEvent: obj})
      return
    })
  }

  fetchAdminCreatedEvents(){
    return Axios.get("http://ellakk.zapto.org:5050/api/Admin/events",{
      params:{ userToken: sessionStorage.getItem('userToken')}
    }).then(res=>{
      return res.data
    })
  }
}

export default MyCreatedEvents;
