import React,{Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import Axios from 'axios';
import EditEventModal from './modal-editevent';
import CreateEventModal from './modal-createEvent';
import AdminEventToolsModal from './modal-admineventtools';
import EventWorkRegistrationModal from './modal-eventworkerregistrations';
import ParticipantListModal from './modal-participantlist';


class MyCreatedEvents extends Component{

  constructor(props){
    super(props)
    this.state={
      adminCreatedEvents: [],
      selectedEvent: {},
      isOpenEditEventModal: false,
      isOpenAdminEventModal: false,
      isOpenEventWorkRegistration: false,
      isOpenParticipantList: false,
      isOpenCreateEvent: false,
    }
  }

  componentDidMount(){
    this.fetchAdminCreatedEvents().then(res=>{this.setState({adminCreatedEvents:res})})
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.adminCreatedEvents === prevState.adminCreatedEvents){
     this.fetchAdminCreatedEvents().then(res=>{this.setState({adminCreatedEvents:res})})
   }
  }

  render(){
    return(
      <div>
        <button className="btn btn-primary" onClick={this.toggleCreateEvent}>Skapa Event</button>
        <h2>Mina Skapade Event</h2>
        <EventFinder events={this.state.adminCreatedEvents} onClick={this.toggleAdminEventModal}/>
        {this.state.isOpenEditEventModal &&
        <EditEventModal event={this.state.selectedEvent} show={this.state.isOpenEditEventModal} onClose={this.toggleEditEventModal} />}
        <AdminEventToolsModal event={this.state.selectedEvent} show={this.state.isOpenAdminEventModal} onClose={this.toggleAdminEventModal} onEdit={this.toggleEditEventModal} onEventWork={this.toggleEventWorkRegistrationModal} onParticipant={this.toggleParticipantListModal}/>
        <EventWorkRegistrationModal event={this.state.selectedEvent} show={this.state.isOpenEventWorkRegistration} onClose={this.toggleEventWorkRegistrationModal}/>
        {this.state.isOpenParticipantList &&
        <ParticipantListModal event={this.state.selectedEvent} show={this.state.isOpenParticipantList} onClose={this.toggleParticipantListModal}/>}
        <CreateEventModal show={this.state.isOpenCreateEvent} onClose={this.toggleCreateEvent}/>

      </div>

      )
    }

    toggleCreateEvent = () =>{
      this.setState({
        isOpenCreateEvent: !this.state.isOpenCreateEvent
      })
    }

    toggleEditEventModal = () => {
      if(!this.state.isOpenEditEventModal){
        this.setState({
          isOpenEditEventModal: !this.state.isOpenEditEventModal,
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
        })
      }else{
        this.fetchAdminCreatedEvents().then(res=>{this.setState({adminCreatedEvents:res})})
        this.setState({
          isOpenEditEventModal: !this.state.isOpenEditEventModal,
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
        })
      }
    }

    toggleEventWorkRegistrationModal = () => {
      if(!this.state.isOpenEventWorkRegistration){
        this.setState({
          isOpenEventWorkRegistration: !this.state.isOpenEventWorkRegistration,
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
        })
      }else{
        this.setState({
          isOpenEventWorkRegistration: !this.state.isOpenEventWorkRegistration,
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
        })
      }
    }

    toggleParticipantListModal = () => {
      if(!this.state.isOpenEventWorkRegistration){
        this.setState({
          isOpenParticipantList: !this.state.isOpenParticipantList,
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
        })
      }else{
        this.setState({
          isOpenParticipantList: !this.state.isOpenParticipantList,
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
        })
      }
    }

    toggleAdminEventModal = (selectedEvent) => {
      if(!this.state.isOpenAdminEventModal){
        this.getSelectedEvent(selectedEvent);
        this.setState({
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal,
        })
      }else{
        this.setState({
          selectedEvent: {},
          isOpenAdminEventModal: !this.state.isOpenAdminEventModal
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
