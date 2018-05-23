import React,{Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import ApplyForEventWorkModal from './modal-applyforeventwork';
import SearchBar from '../../components/searchbar';
import Axios from 'axios';


class ApplyForEvents extends Component{

  constructor(props) {
    super(props);
    this.state ={
      searchTerm: '',
      applicationEvents: [],
      selectedEvent: {},
      isOpenApplyForEventWork: false,
    }

  }

  componentDidMount(){
    this.fetchEventInfoPublic().then(res=>{this.setState({applicationEvents:res})})
  }

  render(){

    return(
      <div className="container">
      <SearchBar onChange={this.searchTermChange}/>
      <EventFinder events={this.state.applicationEvents} searchTerm={this.state.searchTerm} onClick={this.toggleApplyForEventWorkModal}/>
      {this.state.isOpenApplyForEventWork && <ApplyForEventWorkModal event={this.state.selectedEvent} show={this.state.isOpenApplyForEventWork} onClose={this.toggleApplyForEventWorkModal}/>}
      </div>
    )
  }

  searchTermChange = (term) =>{
    this.setState({searchTerm: term})
  }

  getSelectedEvent(selectedEvent){
    this.state.applicationEvents.forEach((obj)=>{
      if(selectedEvent.eventId === obj.eventId)

      this.setState({selectedEvent: obj})
      return
    })
  }

  toggleApplyForEventWorkModal = (selectedEvent) => {
    if(!this.state.isOpenApplyForEventWork){
      this.getSelectedEvent(selectedEvent.eventId).then(res=>{this.setState({selectedEvent:res})}).then(
        this.setState({

          isOpenEventInfo: !this.state.isOpenEventInfo
        }))
      this.setState({
        isOpenApplyForEventWork: !this.state.isOpenApplyForEventWork
      })
    }else{
      this.setState({
        selectedEvent: {},

        isOpenApplyForEventWork: !this.state.isOpenApplyForEventWork
      })
    }
  }

  getSelectedEvent(selectedEvent){

    return Axios.get('http://ellakk.zapto.org:5050/api/Events/'+selectedEvent).then(res =>
      {
        return res.data
      })
    }

  fetchEventInfoPublic(){
    return Axios.get('http://ellakk.zapto.org:5050/api/Events').then(res => {
      return res.data
    })
  }

}

export default ApplyForEvents;
