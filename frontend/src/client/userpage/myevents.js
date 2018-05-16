import React, {Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import SearchBar from '../../components/searchbar';
import EventWorkInfoModal from './modal-eventworkinfo';
import Axios from 'axios';

class MyEvents extends Component{
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: '',
      userEvents: [],
      selectedEvent: {},
      isOpenRegisterForEventWork: false,
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
      <SearchBar onChange={this.searchTermChange}/>
      <EventFinder events={this.state.userEvents} searchTerm={this.state.searchTerm} onClick={this.toggleEventInfoWorkModal}/>
      <EventWorkInfoModal event={this.state.selectedEvent} show={this.state.isOpenRegisterForEventWork} onClose={this.toggleEventInfoWorkModal}/>
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
