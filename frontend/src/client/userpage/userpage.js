import React, {Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import {EventFinderContext} from '../../providers/provider-eventfinder';
import SearchBar from '../../components/searchbar';
import EventWorkInfoModal from './modal-eventworkinfo';
import CreateEventModal from './modal-createEvent';
import UserPageNavbar from './userpageNavbar';
import MyEvents from './myevents';
import Axios from 'axios';


class UserPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      userEvents: [],
      selectedEvent: {},
      isAdmin: false,
      isOpenRegisterForEventWork: false,
      isOpenCreateEvent: false,
      conditionalUserPageRender: "myEvents"
    };
  }

  componentDidMount(){
    this.fetchIsAdmin().then(res=>{
      if(res >= 2){
        this.setState({isAdmin: true})
      }
    })
  }

  render(){

    return(
      <div>
        <UserPageNavbar isAdmin={this.state.isAdmin} onClick={this.handleNavChange}/>
        <MyEvents/>
        {/* <SearchBar onChange={this.searchTermChange}/>
        <EventFinder events={this.state.userEvents} searchTerm={this.state.searchTerm} onClick={this.toggleEventInfoWorkModal}/>
        <EventWorkInfoModal event={this.state.selectedEvent} show={this.state.isOpenRegisterForEventWork} onClose={this.toggleEventInfoWorkModal}/> */}

        <CreateEventModal show={this.state.isOpenCreateEvent} onClose={this.toggleCreateEvent}/>
      </div>
    )
  }


  searchTermChange = (term) =>{
    this.setState({searchTerm: term})
  }

  toggleEventInfoWorkModal = (selectedEvent) => {
    if(!this.state.isOpenRegisterForEventWork){
      this.getSelectedEvent(selectedEvent);
      this.setState({

        isOpenRegisterForEventWork: !this.state.isOpenRegisterForEventWork
      })
    }else{
      this.setState({
        selectedEvent: {},
        isOpenRegisterForEventWork: !this.state.isOpenRegisterForEventWork
      })
    }
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

  handleNavChange=(navLink) =>{
    const navLinkID = navLink.target.id;

    this.setState({conditionalUserPageRender:navLinkID})
    if(navLinkID === "createEvent"){
      this.toggleCreateEvent();
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

  fetchIsAdmin(){
    return Axios.get("http://ellakk.zapto.org:5050/api/User",{
      params: { userToken: sessionStorage.getItem('userToken') }
    }).then(res=>{
      return res.data.userPrivileges
    })
  }

}

export default UserPage;
