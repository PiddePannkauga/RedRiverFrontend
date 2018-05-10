import React, {Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import {EventFinderContext} from '../../providers/provider-eventfinder';
import SearchBar from '../../components/searchbar';
import EventWorkInfoModal from './modal-eventworkinfo';
import Axios from 'axios';

class UserPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedEvent:{},
      isOpenRegisterForEventWork: false
    };
  }

  componentDidMount(){
    <EventFinderContext.Consumer>
      {(context) => (
        context.fetchEventUser()
      )}
    </EventFinderContext.Consumer>
  }

  render(){
    return(
      <div>
      <button>Skapa event</button>
      <SearchBar  onChange={this.searchTermChange}/>
      <EventFinderContext.Consumer>
        {(context) => (
        <EventFinder events={context.state.eventsUser} searchTerm={this.state.searchTerm} onClick={this.toggleEventInfoWorkModal}/>
        )}
      </EventFinderContext.Consumer>
      <EventWorkInfoModal event={this.state.selectedEvent} show={this.state.isOpenRegisterForEventWork} onClose={this.toggleEventInfoWorkModal}/>
      </div>
  )
  }
  searchTermChange = (term) =>{
    this.setState({searchTerm: term})
  }

  toggleEventInfoWorkModal = (selectedEvent) => {
    if(!this.state.isOpenRegisterForEventWork){
      this.getSelectedEvent(selectedEvent.eventId).then(res=>{this.setState({selectedEvent:res})}).then(
        this.setState({

          isOpenRegisterForEventWork: !this.state.isOpenRegisterForEventWork
        }))
      }else{
        this.setState({
          selectedEvent: {},
          isOpenRegisterForEventWork: !this.state.isOpenRegisterForEventWork
        })
      }
    }

    getSelectedEvent(selectedEvent){

      return Axios.get('http://ellakk.zapto.org:5050/api/Events/'+selectedEvent).then(res =>
        {
          return res.data
        })
      }

}

export default UserPage;
