import React, {Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import {EventFinderContext} from '../../providers/provider-eventfinder';
import SearchBar from '../../components/searchbar';
import EventWorkInfoModal from './modal-eventworkinfo';
import CreateEventModal from './modal-createEvent';
import UserPageNavbar from './userpageNavbar';
import MyEvents from './myevents';
import MyCreatedEvents from './mycreatedEvents';
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

        {this.state.conditionalUserPageRender === "myEvents" && <MyEvents/>}
        {this.state.conditionalUserPageRender === "myCreatedEvents"  && <MyCreatedEvents />}

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

  handleNavChange=(navLink) =>{
    const navLinkID = navLink.target.id;

    this.setState({conditionalUserPageRender:navLinkID})
    if(navLinkID === "createEvent"){
      this.toggleCreateEvent();
    }
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
