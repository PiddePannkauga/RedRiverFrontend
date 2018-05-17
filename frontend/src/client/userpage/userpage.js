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
import {Route, Redirect } from 'react-router-dom';


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
      conditionalUserPageRender: "myEvents",
      isLoggedIn: true
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

    if(!this.state.isLoggedIn){
      return <Redirect to="/public"/>
    }

    return(
      <div>
        <UserPageNavbar onClick={this.handleNavChange} logout={this.logout}/>

        {this.state.conditionalUserPageRender === "myEvents" && <MyEvents isAdmin={this.state.isAdmin}/>}


        <CreateEventModal show={this.state.isOpenCreateEvent} onClose={this.toggleCreateEvent}/>
      </div>
    )
  }

  logout=()=>{
    this.setState({
      isLoggedIn: false
    })
    sessionStorage.removeItem("userToken");
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
